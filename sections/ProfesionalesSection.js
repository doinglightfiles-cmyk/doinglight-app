import React from "react";
import { Animated, Platform, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import {
  BRAND_COLOR,
  PROFESSIONAL_TOOLS,
  PROFESSIONALS_VIDEO_EMBED_URL,
  PROFESSIONALS_VIDEO_URL
} from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function ProfesionalesSection({ onOpenVideo, onSelectTool, sectionFade }) {
  const hasVideo = Boolean(PROFESSIONALS_VIDEO_URL);

  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.professionalsSectionWrap}>
        <Text style={styles.professionalsSectionTitle}>ZONA PROFESIONALES</Text>

        <View style={styles.professionalsVideoFrame}>
          {hasVideo && Platform.OS !== "web" ? (
            <WebView
              source={{ uri: PROFESSIONALS_VIDEO_EMBED_URL }}
              style={styles.professionalsVideoWebview}
              javaScriptEnabled
              domStorageEnabled
              allowsFullscreenVideo
            />
          ) : (
            <View style={styles.professionalsVideoPlaceholder}>
              <MaterialIcons name="play-circle-outline" size={54} color="#ffffff" />
              <Text style={styles.professionalsVideoPlaceholderTitle}>Vídeo de YouTube</Text>
              <Text style={styles.professionalsVideoPlaceholderText}>
                {hasVideo
                  ? "En web abriremos este vídeo en una vista externa para evitar problemas de render."
                  : "Pendiente de URL. En cuanto me pases el enlace, queda integrado aquí dentro."}
              </Text>
              {hasVideo ? (
                <Pressable style={styles.professionalsVideoButton} onPress={onOpenVideo}>
                  <MaterialIcons name="open-in-new" size={18} color={BRAND_COLOR} />
                  <Text style={styles.professionalsVideoButtonText}>Abrir vídeo</Text>
                </Pressable>
              ) : null}
            </View>
          )}
        </View>

        <Text style={styles.professionalsToolsTitle}>HERRAMIENTAS</Text>

        <View style={styles.professionalsToolsRow}>
          {PROFESSIONAL_TOOLS.map((tool) => (
            <Pressable
              key={tool.id}
              onPress={() => onSelectTool?.(tool.id)}
              style={styles.professionalsToolItem}
            >
              <View style={styles.professionalsToolIcon}>
                <MaterialIcons name={tool.icon} size={28} color="#ffffff" />
              </View>
              <Text style={styles.professionalsToolLabel}>{tool.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Animated.View>
  );
}
