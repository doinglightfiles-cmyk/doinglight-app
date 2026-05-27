import React from "react";
import { ActivityIndicator, Animated, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CompassDial from "../components/CompassDial";
import styles from "../styles/appStyles";

export default function BrujulaSection({
  headingAttempted,
  headingAccuracy,
  headingCardinal,
  headingDegrees,
  headingLive,
  headingStatus,
  headingText,
  loadingHeading,
  onCaptureHeading,
  sectionFade
}) {
  const hasReading = typeof headingDegrees === "number" && Boolean(headingCardinal);
  const accuracyLabel =
    typeof headingAccuracy === "number"
      ? ["Sin calibrar", "Baja", "Media", "Alta"][Math.max(0, Math.min(3, Math.round(headingAccuracy)))]
      : "";

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.toolSectionWrap}>
        <Text style={styles.toolSectionTitle}>BRÚJULA</Text>
        <Text style={styles.toolSectionLead}>
          Utiliza la brújula del teléfono para orientarte durante la instalación. La aguja se actualiza
          en tiempo real; mantén el móvil lo más plano posible y lejos de estructuras metálicas.
        </Text>

        <View style={styles.toolPanel}>
          {headingLive ? (
            <View style={styles.toolLiveBadge}>
              <MaterialIcons name="sensors" size={15} color="#31451f" />
              <Text style={styles.toolLiveBadgeText}>En directo</Text>
            </View>
          ) : null}
          <CompassDial degrees={headingDegrees || 0} cardinal={headingCardinal || "N"} />
          <Text style={styles.toolValue}>{hasReading ? headingText : "Sin medición"}</Text>
          {accuracyLabel ? (
            <Text style={styles.toolMetaText}>Precisión: {accuracyLabel}</Text>
          ) : null}
          <Text style={styles.toolSupportText}>
            {headingStatus ||
              (headingAttempted
                ? "Si la lectura parece inestable, repite la medición en una zona más despejada."
                : "La lectura continua se iniciará al abrir esta herramienta.")}
          </Text>
        </View>

        <Pressable onPress={onCaptureHeading} style={styles.toolPrimaryButton}>
          {loadingHeading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <>
              <MaterialIcons name="explore" size={18} color="#ffffff" />
              <Text style={styles.toolPrimaryButtonText}>
                {hasReading ? "Recalibrar Lectura" : "Capturar Orientación"}
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </Animated.View>
  );
}
