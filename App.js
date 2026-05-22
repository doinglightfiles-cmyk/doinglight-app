import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Linking,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { SvgXml } from "react-native-svg";
import {
  APP_BACKEND_URL,
  BRAND_COLOR,
  CATALOG_REQUEST_SUBJECT,
  INTRO_DURATION_MS,
  PROFESSIONALS_VIDEO_URL,
  RECEIVER_EMAIL,
  WEBSITE_URL
} from "./constants/appConstants";
import COMPANY_LOGO_XML from "./assets/companyLogoXml";
import LOGO_PIE_WHITE_XML from "./assets/logoPieWhiteXml";
import AssistantSection from "./sections/AssistantSection";
import BrujulaSection from "./sections/BrujulaSection";
import CatalogosSection from "./sections/CatalogosSection";
import ContactoSection from "./sections/ContactoSection";
import FichasTecnicasSection from "./sections/FichasTecnicasSection";
import HomeSection from "./sections/HomeSection";
import LuxometroSection from "./sections/LuxometroSection";
import MetroSection from "./sections/MetroSection";
import NivelSection from "./sections/NivelSection";
import ProfesionalesSection from "./sections/ProfesionalesSection";
import styles from "./styles/appStyles";
import { classifyLux, estimateLuxFromExif, estimateLuxFromLuma } from "./utils/lux";
import { computeSolarEstimate, toCardinal } from "./utils/solar";

const PdfViewer = Platform.OS === "web" ? null : require("react-native-pdf").default;

export default function App() {
  const { height: viewportHeight } = useWindowDimensions();
  const webFullHeight = Platform.OS === "web" ? { minHeight: "100vh" } : null;
  const [showIntro, setShowIntro] = useState(true);
  const introFade = useRef(new Animated.Value(0)).current;
  const homeFadeOne = useRef(new Animated.Value(0)).current;
  const homeFadeTwo = useRef(new Animated.Value(0)).current;
  const homeFadeThree = useRef(new Animated.Value(0)).current;
  const homeFadeFour = useRef(new Animated.Value(0)).current;
  const homeFadeFive = useRef(new Animated.Value(0)).current;
  const sectionFade = useRef(new Animated.Value(1)).current;
  const [activeSection, setActiveSection] = useState("inicio");
  const [sectionHistory, setSectionHistory] = useState([]);
  const [locationAttempted, setLocationAttempted] = useState(false);
  const [headingAttempted, setHeadingAttempted] = useState(false);
  const [acceptedLegal, setAcceptedLegal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [newRoom, setNewRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomAreas, setRoomAreas] = useState({});
  const [roofType, setRoofType] = useState("");
  const [inclinedDistances, setInclinedDistances] = useState({});
  const [singleDistance, setSingleDistance] = useState("");
  const [locationText, setLocationText] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [headingDegrees, setHeadingDegrees] = useState(null);
  const [headingCardinal, setHeadingCardinal] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingHeading, setLoadingHeading] = useState(false);
  const [measuringLux, setMeasuringLux] = useState(false);
  const [luxValue, setLuxValue] = useState(null);
  const [luxLabel, setLuxLabel] = useState("");
  const [luxMessage, setLuxMessage] = useState("");
  const [submittingAssistant, setSubmittingAssistant] = useState(false);
  const [assistantSubmitStatus, setAssistantSubmitStatus] = useState("");
  const [assistantSubmitMessage, setAssistantSubmitMessage] = useState("");
  const [selectedCatalog, setSelectedCatalog] = useState(null);
  const [catalogPdfSource, setCatalogPdfSource] = useState(null);
  const [catalogPdfLoading, setCatalogPdfLoading] = useState(true);
  const [catalogPdfError, setCatalogPdfError] = useState("");
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef(null);

  const solarData = useMemo(() => computeSolarEstimate(lat), [lat]);

  useEffect(() => {
    Animated.timing(introFade, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();

    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION_MS);
    return () => clearTimeout(timer);
  }, [introFade]);

  useEffect(() => {
    if (showIntro) return;

    homeFadeOne.setValue(0);
    homeFadeTwo.setValue(0);
    homeFadeThree.setValue(0);
    homeFadeFour.setValue(0);
    homeFadeFive.setValue(0);
    Animated.stagger(180, [
      Animated.timing(homeFadeOne, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true
      }),
      Animated.timing(homeFadeTwo, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true
      }),
      Animated.timing(homeFadeThree, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true
      }),
      Animated.timing(homeFadeFour, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true
      }),
      Animated.timing(homeFadeFive, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true
      })
    ]).start();
  }, [showIntro, homeFadeOne, homeFadeTwo, homeFadeThree, homeFadeFour, homeFadeFive]);

  useEffect(() => {
    if (showIntro || activeSection === "inicio") return;
    sectionFade.setValue(0);
    Animated.timing(sectionFade, {
      toValue: 1,
      duration: 360,
      useNativeDriver: true
    }).start();
  }, [activeSection, sectionFade, showIntro]);

  const requestLocation = async () => {
    try {
      setLocationAttempted(true);
      setLoadingLocation(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No se pudo acceder a la ubicacion.");
        return;
      }

      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      const latitude = Number(position.coords.latitude.toFixed(6));
      const longitude = Number(position.coords.longitude.toFixed(6));

      setLat(latitude);
      setLon(longitude);
      setLocationText(`Lat: ${latitude} | Lon: ${longitude}`);

      try {
        const places = await Location.reverseGeocodeAsync({
          latitude,
          longitude
        });
        const firstPlace = places?.[0];
        if (firstPlace) {
          const addressParts = [
            firstPlace.street,
            firstPlace.city || firstPlace.subregion,
            firstPlace.region,
            firstPlace.country
          ].filter(Boolean);
          setLocationAddress(addressParts.join(", "));
        } else {
          setLocationAddress("");
        }
      } catch (error) {
        setLocationAddress("");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener la ubicacion.");
    } finally {
      setLoadingLocation(false);
    }
  };

  const requestHeading = async () => {
    try {
      setHeadingAttempted(true);
      setLoadingHeading(true);
      const enabled = await Location.hasServicesEnabledAsync();
      if (!enabled) {
        Alert.alert("Servicios desactivados", "Activa la ubicacion para medir orientacion.");
        return;
      }

      const headingData = await Location.getHeadingAsync();
      const deg = Number((headingData.trueHeading || headingData.magHeading || 0).toFixed(1));
      const cardinal = toCardinal(deg);
      setHeadingDegrees(deg);
      setHeadingCardinal(cardinal);
      setHeadingText(`${deg}° (${cardinal})`);
    } catch (error) {
      Alert.alert("Error", "No se pudo capturar la orientacion. Intenta en exterior.");
    } finally {
      setLoadingHeading(false);
    }
  };

  const addRoom = () => {
    const trimmed = newRoom.trim();
    if (!trimmed) return;

    const alreadyExists = rooms.some((room) => room.toLowerCase() === trimmed.toLowerCase());
    if (alreadyExists) {
      Alert.alert("Estancia duplicada", "Esa estancia ya fue agregada.");
      return;
    }

    setRooms((prev) => [...prev, trimmed]);
    setRoomAreas((prev) => ({ ...prev, [trimmed]: prev[trimmed] || "" }));
    setInclinedDistances((prev) => ({ ...prev, [trimmed]: prev[trimmed] || "" }));
    setNewRoom("");
  };

  const removeRoom = (roomToRemove) => {
    setRooms((prev) => prev.filter((room) => room !== roomToRemove));

    setRoomAreas((prev) => {
      const copy = { ...prev };
      delete copy[roomToRemove];
      return copy;
    });

    setInclinedDistances((prev) => {
      const copy = { ...prev };
      delete copy[roomToRemove];
      return copy;
    });
  };

  const validateForm = () => {
    if (!rooms.length) {
      Alert.alert("Falta informacion", "Agrega al menos una estancia.");
      return false;
    }

    const missingAreas = rooms.some((room) => !roomAreas[room]?.trim());
    if (missingAreas) {
      Alert.alert("Falta informacion", "Completa los m2 de cada estancia.");
      return false;
    }

    if (!roofType) {
      Alert.alert("Falta informacion", "Selecciona la tipologia de tejado/cubierta.");
      return false;
    }

    if (roofType === "Tejado inclinado") {
      const missingDistances = rooms.some((room) => !inclinedDistances[room]?.trim());
      if (missingDistances) {
        Alert.alert("Falta informacion", "Completa la distancia para cada estancia.");
        return false;
      }
    } else if (!singleDistance.trim()) {
      Alert.alert("Falta informacion", "Indica la distancia entre techo interior y tejado exterior.");
      return false;
    }

    if (!fullName.trim()) {
      Alert.alert("Falta informacion", "Indica tu nombre.");
      return false;
    }

    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Falta informacion", "Indica un correo valido.");
      return false;
    }

    if (!acceptedLegal) {
      Alert.alert("Falta informacion", "Debes aceptar el texto legal para continuar.");
      return false;
    }

    return true;
  };

  const buildAssistantPayload = () => {
    const normalizedRooms = rooms.map((room) => ({
      name: room,
      area: roomAreas[room] || "",
      distance: roofType === "Tejado inclinado" ? inclinedDistances[room] || "" : singleDistance || ""
    }));

    return {
      acceptedLegal,
      email,
      fullName,
      headingCardinal,
      headingDegrees,
      headingText,
      inclinedDistances,
      locationAddress,
      locationText,
      platform: Platform.OS,
      roofType,
      roomAreas,
      rooms,
      roomsDetailed: normalizedRooms,
      singleDistance,
      solarHemisphere: solarData.hemisphere,
      solarRecommendation: solarData.recomendacion,
      submittedAt: new Date().toISOString()
    };
  };

  const submitAssistantRequest = async () => {
    if (!validateForm()) return;
    if (submittingAssistant) return;

    try {
      setSubmittingAssistant(true);
      setAssistantSubmitStatus("");
      setAssistantSubmitMessage("");

      const response = await fetch(`${APP_BACKEND_URL}/api/assistant/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(buildAssistantPayload())
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch (error) {
        responseData = null;
      }

      if (!response.ok) {
        const errorMessage = responseData?.message || "No se pudo enviar el formulario.";
        throw new Error(errorMessage);
      }

      setAssistantSubmitStatus("success");
      setAssistantSubmitMessage("Solicitud enviada correctamente. Le responderemos por email.");
      Alert.alert("Solicitud enviada", "Hemos recibido sus datos correctamente.");
    } catch (error) {
      const errorMessage = error?.message || "No se pudo enviar el formulario.";
      setAssistantSubmitStatus("error");
      setAssistantSubmitMessage(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setSubmittingAssistant(false);
    }
  };

  const startLuxMeasurement = async () => {
    if (Platform.OS !== "web") {
      try {
        setMeasuringLux(true);
        setLuxValue(null);
        setLuxLabel("");
        setLuxMessage("");

        const permission = await Camera.requestCameraPermissionsAsync();
        if (!permission.granted) {
          Alert.alert("Permiso denegado", "Necesitamos acceso a camara para medir luz.");
          return;
        }

        if (!cameraReady || !cameraRef.current) {
          Alert.alert("Camara iniciando", "Espera un momento y pulsa INICIAR de nuevo.");
          return;
        }

        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.4,
          skipProcessing: true,
          exif: true
        });

        const estimatedLux = estimateLuxFromExif(photo?.exif);
        if (!estimatedLux) {
          Alert.alert("Medicion no disponible", "No se pudieron leer metadatos de exposicion.");
          return;
        }

        const result = classifyLux(estimatedLux);
        setLuxValue(estimatedLux);
        setLuxLabel(result.label);
        setLuxMessage(result.message);
      } catch (error) {
        Alert.alert("Error", "No se pudo completar la medicion de luz.");
      } finally {
        setMeasuringLux(false);
      }
      return;
    }

    if (!navigator?.mediaDevices?.getUserMedia) {
      Alert.alert("No disponible", "Este navegador no permite acceso a camara.");
      return;
    }

    let stream;
    try {
      setMeasuringLux(true);
      setLuxValue(null);
      setLuxLabel("");
      setLuxMessage("");

      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });

      const video = document.createElement("video");
      video.srcObject = stream;
      video.playsInline = true;
      await video.play();

      await new Promise((resolve) => setTimeout(resolve, 900));

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("No se pudo crear contexto de imagen.");

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

      let total = 0;
      const sampleStep = 16;
      let count = 0;
      for (let i = 0; i < data.length; i += sampleStep * 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        total += 0.2126 * r + 0.7152 * g + 0.0722 * b;
        count += 1;
      }

      const avgLuma = count ? total / count : 0;
      const estimatedLux = estimateLuxFromLuma(avgLuma);
      const result = classifyLux(estimatedLux);

      setLuxValue(estimatedLux);
      setLuxLabel(result.label);
      setLuxMessage(result.message);
    } catch (error) {
      Alert.alert("Error", "No se pudo completar la medicion de luz.");
    } finally {
      if (stream) stream.getTracks().forEach((track) => track.stop());
      setMeasuringLux(false);
    }
  };

  const hasStartedAssistant =
    rooms.length > 0 ||
    Boolean(newRoom.trim()) ||
    Boolean(roofType) ||
    Boolean(singleDistance.trim()) ||
    Boolean(fullName.trim()) ||
    Boolean(email.trim());

  const openUrl = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert("No disponible", "No se pudo abrir este enlace en el dispositivo.");
        return;
      }
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert("Error", "No se pudo abrir el enlace solicitado.");
    }
  };

  const openDownload = async (item) => {
    try {
      setSelectedCatalog(item);
      setCatalogPdfLoading(true);
      setCatalogPdfError("");
      setCatalogPdfSource(null);

      if (Platform.OS === "web") {
        if (item.pdfUrl) {
          await openUrl(item.pdfUrl);
          return;
        }

        if (item.file) {
          const asset = Asset.fromModule(item.file);
          await asset.downloadAsync();
          const targetUrl = asset.localUri || asset.uri;
          if (!targetUrl) {
            throw new Error("No se pudo preparar el archivo PDF.");
          }
          await openUrl(targetUrl);
          return;
        }
      }

      if (item.pdfUrl) {
        setCatalogPdfSource({
          uri: item.pdfUrl,
          cache: true
        });
        return;
      }

      if (item.file) {
        const asset = Asset.fromModule(item.file);
        await asset.downloadAsync();
        const targetUrl = asset.localUri || asset.uri;
        if (!targetUrl) {
          throw new Error("No se pudo preparar el archivo PDF.");
        }
        setCatalogPdfSource({
          uri: targetUrl,
          cache: true
        });
        return;
      }

      throw new Error("No hay archivo asociado a este catálogo.");
    } catch (error) {
      setCatalogPdfLoading(false);
      setCatalogPdfError("No se pudo abrir el archivo PDF.");
    }
  };

  const closeCatalogViewer = () => {
    setSelectedCatalog(null);
    setCatalogPdfSource(null);
    setCatalogPdfLoading(true);
    setCatalogPdfError("");
  };

  const openCatalogRequest = async () => {
    const subject = CATALOG_REQUEST_SUBJECT;
    const body =
      "Hola Doinglight,%0D%0A%0D%0AQuiero solicitar informacion comercial y catalogos sobre sus tubos solares.%0D%0A%0D%0AGracias.";
    await openUrl(`mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`);
  };

  const goHome = () => {
    setSectionHistory([]);
    setActiveSection("inicio");
  };

  const navigateToSection = (nextSection, origin = activeSection) => {
    if (!nextSection) return;
    if (nextSection === "inicio") {
      goHome();
      return;
    }
    if (nextSection === activeSection) return;

    if (origin && origin !== nextSection) {
      setSectionHistory((prev) => [...prev, origin]);
    }

    setActiveSection(nextSection);
  };

  const goBack = () => {
    if (!sectionHistory.length) {
      goHome();
      return;
    }

    const nextSection = sectionHistory[sectionHistory.length - 1];
    setSectionHistory((prev) => prev.slice(0, -1));
    setActiveSection(nextSection);
  };

  const renderSectionContent = () => {
    if (activeSection === "inicio") {
      return (
        <HomeSection
          fades={{
            one: homeFadeOne,
            two: homeFadeTwo,
            three: homeFadeThree,
            four: homeFadeFour,
            five: homeFadeFive
          }}
          onSelectSection={(section) => navigateToSection(section, "inicio")}
        />
      );
    }

    if (activeSection === "brujula") {
      return (
        <BrujulaSection
          headingAttempted={headingAttempted}
          headingCardinal={headingCardinal}
          headingDegrees={headingDegrees}
          headingText={headingText}
          loadingHeading={loadingHeading}
          onCaptureHeading={requestHeading}
          sectionFade={sectionFade}
        />
      );
    }

    if (activeSection === "luxometro") {
      return (
        <LuxometroSection
          cameraRef={cameraRef}
          cameraReady={cameraReady}
          luxLabel={luxLabel}
          luxMessage={luxMessage}
          luxValue={luxValue}
          measuringLux={measuringLux}
          onCameraReady={() => setCameraReady(true)}
          onStartMeasurement={startLuxMeasurement}
          sectionFade={sectionFade}
          viewportHeight={viewportHeight}
        />
      );
    }

    if (activeSection === "nivel") {
      return <NivelSection sectionFade={sectionFade} />;
    }

    if (activeSection === "metro") {
      return <MetroSection sectionFade={sectionFade} />;
    }

    if (activeSection === "catalogos") {
      return (
        <CatalogosSection
          onOpenDownload={openDownload}
          onOpenMail={openCatalogRequest}
          onOpenWeb={() => openUrl(WEBSITE_URL)}
          sectionFade={sectionFade}
        />
      );
    }

    if (activeSection === "fichas") {
      return (
        <FichasTecnicasSection
          onOpenDownload={openDownload}
          onOpenMail={openCatalogRequest}
          onOpenWeb={() => openUrl(WEBSITE_URL)}
          sectionFade={sectionFade}
        />
      );
    }

    if (activeSection === "contacto") {
      return (
        <ContactoSection
          email={RECEIVER_EMAIL}
          onOpenMail={() => openUrl(`mailto:${RECEIVER_EMAIL}`)}
          onOpenWeb={() => openUrl(WEBSITE_URL)}
          sectionFade={sectionFade}
          website={WEBSITE_URL}
        />
      );
    }

    if (activeSection === "profesionales") {
      return (
        <ProfesionalesSection
          onOpenVideo={() => openUrl(PROFESSIONALS_VIDEO_URL)}
          onSelectTool={(toolId) => navigateToSection(toolId, "profesionales")}
          sectionFade={sectionFade}
        />
      );
    }

    return (
      <AssistantSection
        acceptedLegal={acceptedLegal}
        activeSection={activeSection}
        addRoom={addRoom}
        email={email}
        fullName={fullName}
        hasStartedAssistant={hasStartedAssistant}
        headingCardinal={headingCardinal}
        headingDegrees={headingDegrees}
        headingAttempted={headingAttempted}
        headingText={headingText}
        inclinedDistances={inclinedDistances}
        loadingHeading={loadingHeading}
        loadingLocation={loadingLocation}
        locationAddress={locationAddress}
        locationAttempted={locationAttempted}
        locationText={locationText}
        mapEmbedUrl={
          lat != null && lon != null
            ? `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.005}%2C${lat - 0.003}%2C${lon + 0.005}%2C${lat + 0.003}&layer=mapnik&marker=${lat}%2C${lon}`
            : ""
        }
        mapPreviewUrl={
          lat != null && lon != null
            ? `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=16&size=900x360&maptype=mapnik&markers=${lat},${lon},lightblue1`
            : ""
        }
        newRoom={newRoom}
        onAcceptedLegalChange={() => setAcceptedLegal((prev) => !prev)}
        onEmailChange={setEmail}
        onFullNameChange={setFullName}
        onHeadingRequest={requestHeading}
        onLocationRequest={requestLocation}
        onNewRoomChange={setNewRoom}
        onRoomAreaChange={(room, value) =>
          setRoomAreas((prev) => ({
            ...prev,
            [room]: value
          }))
        }
        onRoofTypeChange={setRoofType}
        onSingleDistanceChange={setSingleDistance}
        onSubmit={submitAssistantRequest}
        onInclinedDistanceChange={(room, value) =>
          setInclinedDistances((prev) => ({
            ...prev,
            [room]: value
          }))
        }
        removeRoom={removeRoom}
        roomAreas={roomAreas}
        rooms={rooms}
        roofType={roofType}
        sectionFade={sectionFade}
        singleDistance={singleDistance}
        submitMessage={assistantSubmitMessage}
        submitStatus={assistantSubmitStatus}
        submitting={submittingAssistant}
      />
    );
  };

  if (showIntro) {
    return (
      <View style={[styles.introContainer, webFullHeight]}>
        <StatusBar style="light" />
        <Animated.View
          style={[
            styles.introLogoWrap,
            {
              opacity: introFade,
              transform: [
                {
                  scale: introFade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.92, 1]
                  })
                }
              ]
            }
          ]}
        >
          <SvgXml xml={LOGO_PIE_WHITE_XML} width={110} height={110} />
        </Animated.View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        activeSection === "inicio" ? styles.containerHome : null,
        webFullHeight
      ]}
    >
      <StatusBar style="dark" />
      <SafeAreaView edges={["top"]} style={styles.topSafeArea}>
        <View style={styles.topBar}>
          <View style={styles.topBarSide}>
            {activeSection !== "inicio" ? (
              <Pressable onPress={goBack} style={styles.topBarBackButton}>
                <MaterialIcons name="arrow-back" size={24} color={BRAND_COLOR} />
              </Pressable>
            ) : null}
          </View>
          <Pressable onPress={goHome} style={styles.topBarLogoButton}>
            <SvgXml
              xml={COMPANY_LOGO_XML}
              width={165}
              height={40}
              preserveAspectRatio="xMidYMid meet"
              style={styles.headerLogo}
            />
          </Pressable>
          <View style={styles.topBarSide} />
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={
          activeSection === "inicio" || activeSection === "luxometro"
            ? [
                styles.homeContent,
                Platform.OS === "web" ? styles.homeContentWeb : null
              ]
            : [styles.content, Platform.OS === "web" ? styles.contentWeb : null]
        }
      >
        {renderSectionContent()}
      </ScrollView>

      <Modal visible={Boolean(selectedCatalog) && Platform.OS !== "web"} animationType="slide" onRequestClose={closeCatalogViewer}>
        <SafeAreaView style={styles.pdfViewerScreen}>
          <View style={styles.pdfViewerHeader}>
            <Pressable style={styles.pdfViewerBack} onPress={closeCatalogViewer}>
              <MaterialIcons name="arrow-back" size={24} color="#243515" />
              <Text style={styles.pdfViewerBackText}>Volver</Text>
            </Pressable>
            <Text style={styles.pdfViewerTitle}>{selectedCatalog?.title || "Catálogo"}</Text>
          </View>

          <View style={styles.pdfViewerBody}>
            {!PdfViewer ? (
              <View style={styles.pdfViewerFallback}>
                <Text style={styles.pdfViewerFallbackText}>
                  La visualización interna de PDFs está disponible en la app móvil.
                </Text>
              </View>
            ) : (
              <>
                {catalogPdfLoading ? (
                  <View style={styles.pdfViewerLoading}>
                    <ActivityIndicator color="#9cc31a" />
                    <Text style={styles.pdfViewerLoadingText}>Cargando catálogo...</Text>
                  </View>
                ) : null}
                {catalogPdfError ? (
                  <View style={styles.pdfViewerFallback}>
                    <Text style={styles.pdfViewerFallbackText}>{catalogPdfError}</Text>
                  </View>
                ) : null}
                {catalogPdfSource ? (
                  <PdfViewer
                    source={catalogPdfSource}
                    style={styles.pdfViewer}
                    minScale={1}
                    maxScale={5}
                    trustAllCerts={false}
                    onLoadComplete={() => {
                      setCatalogPdfLoading(false);
                      setCatalogPdfError("");
                    }}
                    onError={() => {
                      setCatalogPdfLoading(false);
                      setCatalogPdfError("No se pudo abrir el archivo PDF.");
                    }}
                  />
                ) : null}
              </>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
