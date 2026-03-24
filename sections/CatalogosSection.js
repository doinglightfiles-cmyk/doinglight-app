import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DOWNLOAD_ITEMS } from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function CatalogosSection({ onOpenDownload, onOpenMail, onOpenWeb, sectionFade }) {
  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.infoSectionWrap}>
        <Text style={styles.sectionHeroTitle}>Descargas</Text>
        <Text style={styles.sectionHeroText}>
          Acceda a la documentacion comercial de Doinglight y descargue el archivo mas adecuado
          segun el tipo de proyecto.
        </Text>

        <View style={styles.downloadList}>
          {DOWNLOAD_ITEMS.map((item) => (
            <View key={item.id} style={styles.downloadCard}>
              <View style={styles.infoCardHeader}>
                <MaterialIcons
                  name={item.tag === "Industrial" ? "factory" : "description"}
                  size={22}
                  color="#2f4421"
                />
                <Text style={styles.infoCardTitle}>{item.title}</Text>
              </View>
              <Text style={styles.infoCardText}>{item.description}</Text>
              <View style={styles.downloadMetaRow}>
                <View style={styles.downloadTag}>
                  <Text style={styles.downloadTagText}>{item.tag}</Text>
                </View>
                <View style={styles.downloadLang}>
                  <Text style={styles.downloadLangText}>{item.language}</Text>
                </View>
              </View>
              <Pressable style={styles.primaryCta} onPress={() => onOpenDownload(item)}>
                <MaterialIcons name="download" size={18} color="#ffffff" />
                <Text style={styles.primaryCtaText}>Descargar PDF</Text>
              </Pressable>
            </View>
          ))}
        </View>

        <View style={styles.ctaRow}>
          <Pressable style={styles.primaryCta} onPress={onOpenMail}>
            <MaterialIcons name="mail-outline" size={18} color="#ffffff" />
            <Text style={styles.primaryCtaText}>Solicitar informacion</Text>
          </Pressable>
          <Pressable style={styles.secondaryCta} onPress={onOpenWeb}>
            <MaterialIcons name="open-in-browser" size={18} color="#2f4421" />
            <Text style={styles.secondaryCtaText}>Visitar web</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}
