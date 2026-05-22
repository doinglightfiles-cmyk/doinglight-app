import React from "react";
import { ActivityIndicator, Animated, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CompassDial from "../components/CompassDial";
import styles from "../styles/appStyles";

export default function BrujulaSection({
  headingAttempted,
  headingCardinal,
  headingDegrees,
  headingText,
  loadingHeading,
  onCaptureHeading,
  sectionFade
}) {
  const hasReading = typeof headingDegrees === "number" && Boolean(headingCardinal);

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.toolSectionWrap}>
        <Text style={styles.toolSectionTitle}>BRÚJULA</Text>
        <Text style={styles.toolSectionLead}>
          Utiliza la brújula del teléfono para orientarte rápidamente durante la instalación. Haz la medición con
          el móvil estable y preferiblemente lejos de estructuras metálicas.
        </Text>

        <View style={styles.toolPanel}>
          <CompassDial degrees={headingDegrees || 0} cardinal={headingCardinal || "N"} />
          <Text style={styles.toolValue}>{hasReading ? headingText : "Sin medición"}</Text>
          <Text style={styles.toolSupportText}>
            {headingAttempted
              ? "Si la lectura parece inestable, repite la medición en una zona más despejada."
              : "Pulsa el botón para capturar la orientación actual del dispositivo."}
          </Text>
        </View>

        <Pressable onPress={onCaptureHeading} style={styles.toolPrimaryButton}>
          {loadingHeading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <>
              <MaterialIcons name="explore" size={18} color="#ffffff" />
              <Text style={styles.toolPrimaryButtonText}>
                {hasReading ? "Actualizar Orientación" : "Capturar Orientación"}
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </Animated.View>
  );
}
