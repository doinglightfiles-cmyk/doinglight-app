import React, { useMemo, useState } from "react";
import { Animated, Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles/appStyles";

const DP_PER_CM = 160 / 2.54;
const LENGTH_OPTIONS = [5, 10, 15];

export default function MetroSection({ sectionFade }) {
  const [selectedLength, setSelectedLength] = useState(10);

  const marks = useMemo(() => {
    const items = [];
    for (let step = 0; step <= selectedLength * 2; step += 1) {
      const position = (step / 2) * DP_PER_CM;
      const isWhole = step % 2 === 0;
      items.push({
        key: `mark-${step}`,
        label: isWhole ? String(step / 2) : "",
        left: position,
        height: isWhole ? 32 : 18
      });
    }
    return items;
  }, [selectedLength]);

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.toolSectionWrap}>
        <Text style={styles.toolSectionTitle}>METRO</Text>
        <Text style={styles.toolSectionLead}>
          Esta regla en pantalla sirve como referencia rápida durante una visita o una instalación. La medida es
          aproximada y puede variar ligeramente según el dispositivo.
        </Text>

        <View style={styles.toolPanel}>
          <View style={styles.rulerOptionRow}>
            {LENGTH_OPTIONS.map((length) => {
              const active = length === selectedLength;
              return (
                <Pressable
                  key={length}
                  onPress={() => setSelectedLength(length)}
                  style={[styles.rulerOptionButton, active ? styles.rulerOptionButtonActive : null]}
                >
                  <Text style={[styles.rulerOptionText, active ? styles.rulerOptionTextActive : null]}>
                    {length} cm
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.rulerScroll}>
            <View style={[styles.rulerTrack, { width: selectedLength * DP_PER_CM + 10 }]}>
              {marks.map((mark) => (
                <View key={mark.key} style={[styles.rulerMark, { left: mark.left }]}>
                  <View style={[styles.rulerTick, { height: mark.height }]} />
                  {mark.label ? <Text style={styles.rulerMarkLabel}>{mark.label}</Text> : null}
                </View>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.toolSupportText}>
            Consejo: si necesitas máxima precisión, compara la escala con una tarjeta o regla física y usa esta
            herramienta como apoyo visual.
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
