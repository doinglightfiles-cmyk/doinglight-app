import React, { useEffect, useMemo, useState } from "react";
import { Accelerometer } from "expo-sensors";
import { ActivityIndicator, Animated, Platform, Text, View } from "react-native";
import styles from "../styles/appStyles";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function NivelSection({ sectionFade }) {
  const [available, setAvailable] = useState(Platform.OS !== "web");
  const [loading, setLoading] = useState(true);
  const [reading, setReading] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let subscription = null;
    let mounted = true;

    const start = async () => {
      if (Platform.OS === "web") {
        if (mounted) {
          setAvailable(false);
          setLoading(false);
        }
        return;
      }

      const supported = await Accelerometer.isAvailableAsync();
      if (!mounted) return;

      setAvailable(supported);
      if (!supported) {
        setLoading(false);
        return;
      }

      Accelerometer.setUpdateInterval(140);
      subscription = Accelerometer.addListener((nextReading) => {
        setReading(nextReading);
        setLoading(false);
      });
    };

    start();

    return () => {
      mounted = false;
      subscription?.remove();
    };
  }, []);

  const bubbleOffset = useMemo(() => {
    const range = 56;
    return {
      x: clamp(-reading.x * 180, -range, range),
      y: clamp(reading.y * 180, -range, range)
    };
  }, [reading.x, reading.y]);

  const deviation = useMemo(() => Math.sqrt(reading.x ** 2 + reading.y ** 2), [reading.x, reading.y]);
  const isLevel = deviation < 0.06;

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.toolSectionWrap}>
        <Text style={styles.toolSectionTitle}>NIVEL</Text>
        <Text style={styles.toolSectionLead}>
          Úsalo como referencia rápida para comprobar si la superficie donde trabajas está nivelada. Es una ayuda
          práctica, no un instrumento de precisión certificada.
        </Text>

        <View style={styles.toolPanel}>
          {loading ? (
            <View style={styles.toolLoadingBox}>
              <ActivityIndicator color="#ffffff" />
              <Text style={styles.toolSupportText}>Iniciando sensores...</Text>
            </View>
          ) : available ? (
            <>
              <View style={styles.levelBoard}>
                <View style={styles.levelGuideHorizontal} />
                <View style={styles.levelGuideVertical} />
                <View
                  style={[
                    styles.levelBubble,
                    {
                      transform: [{ translateX: bubbleOffset.x }, { translateY: bubbleOffset.y }]
                    }
                  ]}
                />
              </View>
              <Text style={styles.toolValue}>{isLevel ? "Nivelado" : "Ajusta la inclinación"}</Text>
              <Text style={styles.toolSupportText}>
                Desviación aproximada: {(deviation * 100).toFixed(1)}%. Mueve el móvil suavemente hasta centrar la
                burbuja.
              </Text>
            </>
          ) : (
            <Text style={styles.toolSupportText}>
              Este dispositivo o entorno no permite usar el nivel desde aquí. Pruébalo en la app móvil instalada.
            </Text>
          )}
        </View>
      </View>
    </Animated.View>
  );
}
