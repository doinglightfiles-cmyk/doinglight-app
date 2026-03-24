import React from "react";
import { Animated, Image, Platform, Pressable, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CompassDial from "../components/CompassDial";
import RoofIcon from "../components/RoofIcon";
import { BRAND_COLOR, ROOF_TYPES } from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function AssistantSection({
  acceptedLegal,
  activeSection,
  addRoom,
  email,
  fullName,
  hasStartedAssistant,
  headingCardinal,
  headingDegrees,
  headingAttempted,
  headingText,
  inclinedDistances,
  loadingHeading,
  loadingLocation,
  locationAddress,
  locationAttempted,
  locationText,
  mapEmbedUrl,
  mapPreviewUrl,
  newRoom,
  onAcceptedLegalChange,
  onEmailChange,
  onFullNameChange,
  onHeadingRequest,
  onLocationRequest,
  onNewRoomChange,
  onRoomAreaChange,
  onRoofTypeChange,
  onSingleDistanceChange,
  onSubmit,
  onInclinedDistanceChange,
  removeRoom,
  roomAreas,
  rooms,
  roofType,
  sectionFade,
  singleDistance
}) {
  if (activeSection !== "asistente") {
    return (
      <Animated.View style={{ opacity: sectionFade }}>
        <View style={styles.placeholderWrap}>
          <Text style={styles.placeholderText}>Seccion disponible proximamente</Text>
        </View>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <Text style={styles.leadText}>
        A continuacion determinaremos su ubicacion y orientacion exacta para calcular la
        recepcion de luz solar de su hogar y con estos datos determinar la mejor opcion luminica
        para usted.
      </Text>

      <View style={styles.card}>
        <Pressable style={styles.actionTrigger} onPress={onLocationRequest}>
          <MaterialIcons name="location-on" size={22} color={BRAND_COLOR} />
          <Text style={styles.actionText}>
            {loadingLocation ? "Obteniendo ubicacion..." : "Obtener ubicacion"}
          </Text>
        </Pressable>
        {locationAttempted || loadingLocation ? <Text style={styles.infoText}>{locationText}</Text> : null}
        {locationAddress ? <Text style={styles.locationAddressText}>{locationAddress}</Text> : null}
        {mapPreviewUrl ? (
          <View style={styles.mapPreviewCard}>
            {Platform.OS === "web" && mapEmbedUrl ? (
              <iframe
                title="Mapa de ubicacion"
                src={mapEmbedUrl}
                style={styles.mapPreviewFrame}
              />
            ) : (
              <Image source={{ uri: mapPreviewUrl }} style={styles.mapPreviewImage} resizeMode="cover" />
            )}
            <View style={styles.mapPreviewFooter}>
              <View style={styles.mapPreviewLabelWrap}>
                <MaterialIcons name="place" size={18} color={BRAND_COLOR} />
                <Text style={styles.mapPreviewLabel}>Ubicacion detectada</Text>
              </View>
            </View>
          </View>
        ) : null}

        <Pressable style={styles.actionTrigger} onPress={onHeadingRequest}>
          <MaterialIcons name="explore" size={22} color={BRAND_COLOR} />
          <Text style={styles.actionText}>
            {loadingHeading ? "Capturando orientacion..." : "Capturar orientacion de vivienda"}
          </Text>
        </Pressable>
        <Text style={styles.orientationHint}>
          Situese en la entrada de su hogar y camine unos pasos hacia delante para determinar su
          orientacion.
        </Text>
        {headingText ? (
          <View style={styles.headingCard}>
            <CompassDial degrees={headingDegrees || 0} cardinal={headingCardinal || "N"} />
            <View style={styles.headingInfo}>
              <Text style={styles.headingTitle}>Orientacion de fachada</Text>
              <Text style={styles.headingValue}>{headingText}</Text>
              <Text style={styles.headingHelp}>
                Medicion tomada desde la entrada de la vivienda mirando hacia el exterior.
              </Text>
            </View>
          </View>
        ) : null}
        {!headingText && hasStartedAssistant && !loadingHeading && !headingAttempted ? (
          <Text style={styles.infoText}>Orientacion aun no capturada</Text>
        ) : null}
      </View>
      <View style={styles.sectionDivider} />

      <View style={styles.card}>
        <Text style={styles.section}>1) Anadir estancias</Text>
        <Text style={styles.helper}>Ej: Cocina, Pasillo, Bano...</Text>
        <View style={styles.row}>
          <TextInput
            placeholder="Agregar estancia"
            placeholderTextColor="#7b8a68"
            style={[styles.input, styles.roomInput]}
            value={newRoom}
            onChangeText={onNewRoomChange}
            onSubmitEditing={addRoom}
          />
          <Pressable style={styles.addButton} onPress={addRoom}>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </View>

        <View style={styles.chipsWrap}>
          {rooms.map((room) => (
            <View key={room} style={styles.chip}>
              <Text style={styles.chipText}>{room}</Text>
              <Pressable onPress={() => removeRoom(room)}>
                <Text style={styles.chipRemove}>X</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.sectionDivider} />

      <View style={styles.card}>
        <Text style={styles.section}>2) ¿Cuantos m2 tiene cada estancia?</Text>
        {rooms.length === 0 ? <Text style={styles.helper}>Introduzca al menos una estancia</Text> : null}
        {rooms.map((room) => (
          <View key={`area-${room}`} style={styles.groupField}>
            <Text style={styles.label}>{room}</Text>
            <TextInput
              placeholder={`m2 de ${room}`}
              placeholderTextColor="#7b8a68"
              keyboardType="number-pad"
              style={styles.input}
              value={roomAreas[room] || ""}
              onChangeText={(value) => onRoomAreaChange(room, value)}
            />
          </View>
        ))}
      </View>
      <View style={styles.sectionDivider} />

      <View style={styles.card}>
        <Text style={styles.section}>3) Tipologia de tejado/cubierta</Text>
        <View style={styles.optionsWrap}>
          {ROOF_TYPES.map((type) => {
            const selected = roofType === type;
            const iconColor = selected ? BRAND_COLOR : "#9ba38f";
            return (
              <Pressable
                key={type}
                style={[styles.optionButton, selected ? styles.optionSelected : null]}
                onPress={() => onRoofTypeChange(type)}
              >
                <RoofIcon type={type} color={iconColor} />
                <Text style={[styles.optionText, selected ? styles.optionTextSelected : null]}>{type}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.sectionDivider} />

      <View style={styles.card}>
        <Text style={styles.section}>
          4) ¿Que distancia existe entre el techo interior de su vivienda y el tejado o cubierta exterior?
        </Text>
        {roofType === "Tejado inclinado" ? (
          rooms.map((room) => (
            <View key={`dist-${room}`} style={styles.groupField}>
              <Text style={styles.label}>{room}</Text>
              <TextInput
                placeholder={`Distancia en metros para ${room}`}
                placeholderTextColor="#7b8a68"
                keyboardType="decimal-pad"
                style={styles.input}
                value={inclinedDistances[room] || ""}
                onChangeText={(value) => onInclinedDistanceChange(room, value)}
              />
            </View>
          ))
        ) : (
          <TextInput
            placeholder="Distancia media en metros"
            placeholderTextColor="#7b8a68"
            keyboardType="decimal-pad"
            style={styles.input}
            value={singleDistance}
            onChangeText={onSingleDistanceChange}
          />
        )}
      </View>
      <View style={styles.sectionDivider} />

      <View style={styles.card}>
        <Text style={styles.section}>Datos de contacto</Text>
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="#7b8a68"
          style={styles.input}
          value={fullName}
          onChangeText={onFullNameChange}
        />
        <TextInput
          placeholder="Correo electronico"
          placeholderTextColor="#7b8a68"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={onEmailChange}
        />
      </View>

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>SOLICITAR INFORMACIÓN</Text>
      </Pressable>

      <Pressable style={styles.legalWrap} onPress={onAcceptedLegalChange}>
        <View style={[styles.checkbox, acceptedLegal ? styles.checkboxChecked : null]}>
          {acceptedLegal ? <Text style={styles.checkboxMark}>✓</Text> : null}
        </View>
        <Text style={styles.legalText}>
          Sus datos seran utilizados unicamente para enviarle la informacion solicitada
        </Text>
      </Pressable>
    </Animated.View>
  );
}
