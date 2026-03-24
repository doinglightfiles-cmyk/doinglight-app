import React from "react";
import { Animated, Image, Platform, Pressable, Text, View } from "react-native";
import { CameraView } from "expo-camera";
import { LUXOMETRO_BG } from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function LuxometroSection({
  cameraRef,
  luxLabel,
  luxMessage,
  luxValue,
  measuringLux,
  onCameraReady,
  onStartMeasurement,
  sectionFade,
  viewportHeight
}) {
  const isWeb = Platform.OS === "web";
  const luxImageRatio = 752 / 1636;
  const backgroundHeight = isWeb
    ? Math.min(1180, Math.max(700, viewportHeight * 1.28))
    : Math.max(420, viewportHeight - 64);

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.luxScreen}>
        <View style={[styles.luxBackground, isWeb ? styles.luxBackgroundWeb : null, { height: backgroundHeight }]}>
          {isWeb ? (
            <View style={styles.luxBgImageWebStage}>
              <Image
                source={LUXOMETRO_BG}
                style={[styles.luxBgImagePortraitWeb, { aspectRatio: luxImageRatio }]}
                resizeMode="contain"
              />
            </View>
          ) : (
            <Image source={LUXOMETRO_BG} style={styles.luxBgImageCover} />
          )}
          <View style={isWeb ? styles.luxOverlayAbsolute : styles.luxOverlay}>
            <View style={styles.luxActionLayer}>
              <Pressable style={styles.luxButton} onPress={onStartMeasurement}>
                <Text style={styles.luxButtonText}>{measuringLux ? "MIDIENDO..." : "INICIAR"}</Text>
              </Pressable>
              <Text style={styles.luxNote}>Resultado aproximado, no certificable.</Text>
            </View>
          </View>
          {!isWeb ? (
            <CameraView
              ref={cameraRef}
              style={styles.hiddenNativeCamera}
              facing="back"
              onCameraReady={onCameraReady}
            />
          ) : null}
        </View>

        {luxValue != null ? (
          <View style={styles.luxResultFloat}>
            <View style={styles.luxResultBox}>
              <Text style={styles.luxResultValue}>{luxValue} lux aprox.</Text>
              <Text style={styles.luxResultLabel}>Nivel: {luxLabel}</Text>
              <Text style={styles.luxResultMessage}>{luxMessage}</Text>
            </View>
          </View>
        ) : null}
      </View>
    </Animated.View>
  );
}
