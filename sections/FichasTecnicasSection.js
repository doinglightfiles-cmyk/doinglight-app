import React, { useMemo, useState } from "react";
import { ActivityIndicator, Animated, Image, Modal, Platform, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { TECHNICAL_SHEET_ITEMS } from "../constants/appConstants";
import styles from "../styles/appStyles";

const PdfViewer = Platform.OS === "web" ? null : require("react-native-pdf").default;

export default function FichasTecnicasSection({ sectionFade }) {
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState("");

  const pdfSource = useMemo(() => selectedSheet?.pdf ?? null, [selectedSheet]);

  const openSheet = (item) => {
    setPdfLoading(true);
    setPdfError("");
    setSelectedSheet(item);
  };

  const closeSheet = () => {
    setSelectedSheet(null);
    setPdfLoading(true);
    setPdfError("");
  };

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.infoSectionWrap}>
        <Text style={styles.sectionHeroTitle}>Fichas técnicas</Text>
        <Text style={styles.sectionHeroText}>
          Consulte las principales tipologías técnicas de instalación de Doinglight. Pulse una
          miniatura para abrir la ficha correspondiente dentro de la app.
        </Text>

        <View style={styles.techSheetsGrid}>
          {TECHNICAL_SHEET_ITEMS.map((item) => (
            <Pressable key={item.id} style={styles.techSheetCard} onPress={() => openSheet(item)}>
              <View style={styles.techSheetThumb}>
                {item.image ? (
                  <Image source={item.image} style={styles.techSheetThumbImage} resizeMode="cover" />
                ) : (
                  <View style={styles.techSheetThumbPlaceholder}>
                    <MaterialIcons name={item.icon} size={36} color="#2f4421" />
                  </View>
                )}
              </View>
              <Text style={styles.techSheetTitle}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Modal visible={Boolean(selectedSheet)} animationType="slide" onRequestClose={closeSheet}>
        <SafeAreaView style={styles.pdfViewerScreen}>
          <View style={styles.pdfViewerHeader}>
            <Pressable style={styles.pdfViewerBack} onPress={closeSheet}>
              <MaterialIcons name="arrow-back" size={24} color="#243515" />
              <Text style={styles.pdfViewerBackText}>Volver</Text>
            </Pressable>
            <Text style={styles.pdfViewerTitle}>{selectedSheet?.title || "Ficha técnica"}</Text>
          </View>

          <View style={styles.pdfViewerBody}>
            {Platform.OS === "web" || !PdfViewer ? (
              <View style={styles.pdfViewerFallback}>
                <Text style={styles.pdfViewerFallbackText}>
                  La visualización interna de PDFs está disponible en la app móvil.
                </Text>
              </View>
            ) : (
              <>
                {pdfLoading ? (
                  <View style={styles.pdfViewerLoading}>
                    <ActivityIndicator color="#9cc31a" />
                    <Text style={styles.pdfViewerLoadingText}>Cargando ficha técnica...</Text>
                  </View>
                ) : null}
                {pdfError ? (
                  <View style={styles.pdfViewerFallback}>
                    <Text style={styles.pdfViewerFallbackText}>{pdfError}</Text>
                  </View>
                ) : null}
                {pdfSource ? (
                  <PdfViewer
                    source={pdfSource}
                    style={styles.pdfViewer}
                    minScale={1}
                    maxScale={5}
                    trustAllCerts={false}
                    onLoadComplete={() => {
                      setPdfLoading(false);
                      setPdfError("");
                    }}
                    onError={() => {
                      setPdfLoading(false);
                      setPdfError("No se pudo abrir la ficha técnica.");
                    }}
                  />
                ) : null}
              </>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </Animated.View>
  );
}
