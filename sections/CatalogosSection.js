import React from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CATALOG_ITEMS } from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function CatalogosSection({ onOpenDownload, onOpenMail, onOpenWeb, sectionFade }) {
  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.infoSectionWrap}>
        <Text style={styles.sectionHeroTitle}>Catálogos</Text>
        <Text style={styles.sectionHeroText}>
          Acceda a la documentación comercial principal de Doinglight y descargue el catálogo o el
          manual más adecuado según el tipo de proyecto.
        </Text>

        <View style={styles.downloadList}>
          {CATALOG_ITEMS.map((item) => (
            <View key={item.id} style={styles.downloadCard}>
              <View style={[styles.catalogCoverFrame, { aspectRatio: item.coverRatio || 0.7 }]}>
                <Image source={item.cover} style={styles.catalogCoverImage} resizeMode="cover" />
              </View>
              <View style={styles.infoCardHeader}>
                <MaterialIcons
                  name={
                    item.tag === "Industrial"
                      ? "factory"
                      : item.tag === "Manual"
                        ? "menu-book"
                        : item.tag === "Ganadero"
                          ? "agriculture"
                          : "description"
                  }
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
              {item.file || item.pdfUrl ? (
                <Pressable style={styles.primaryCta} onPress={() => onOpenDownload(item)}>
                  <MaterialIcons name="download" size={18} color="#ffffff" />
                  <Text style={styles.primaryCtaText}>
                    {item.tag === "Manual" ? "Descargar manual" : "Descargar catálogo"}
                  </Text>
                </Pressable>
              ) : (
                <View style={styles.secondaryCta}>
                  <MaterialIcons name="schedule" size={18} color="#2f4421" />
                  <Text style={styles.secondaryCtaText}>Pendiente de archivo</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.ctaRow}>
          <Pressable style={styles.primaryCta} onPress={onOpenMail}>
            <MaterialIcons name="mail-outline" size={18} color="#ffffff" />
            <Text style={styles.primaryCtaText}>Solicitar información</Text>
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
