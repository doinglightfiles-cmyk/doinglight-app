import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/appStyles";

export default function ContactoSection({ email, onOpenMail, onOpenWeb, sectionFade, website }) {
  return (
    <Animated.View style={{ opacity: sectionFade }}>
      <View style={styles.infoSectionWrap}>
        <Text style={styles.sectionHeroTitle}>Contacto Doinglight</Text>
        <Text style={styles.sectionHeroText}>
          Puede contactar con nosotros para solicitar informacion, catalogos o una orientacion
          tecnica inicial sobre su proyecto.
        </Text>

        <View style={styles.infoCard}>
          <View style={styles.infoCardHeader}>
            <MaterialIcons name="mail-outline" size={22} color="#2f4421" />
            <Text style={styles.infoCardTitle}>Correo electronico</Text>
          </View>
          <Text style={styles.infoCardText}>{email}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoCardHeader}>
            <MaterialIcons name="language" size={22} color="#2f4421" />
            <Text style={styles.infoCardTitle}>Sitio web</Text>
          </View>
          <Text style={styles.infoCardText}>{website}</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoCardHeader}>
            <MaterialIcons name="support-agent" size={22} color="#2f4421" />
            <Text style={styles.infoCardTitle}>Tipo de consultas</Text>
          </View>
          <Text style={styles.infoCardText}>
            Estudios preliminares, seleccion de diametros, adaptacion a cubierta y envio de
            informacion comercial.
          </Text>
        </View>

        <View style={styles.ctaColumn}>
          <Pressable style={styles.primaryCta} onPress={onOpenMail}>
            <MaterialIcons name="send" size={18} color="#ffffff" />
            <Text style={styles.primaryCtaText}>Escribir a Doinglight</Text>
          </Pressable>
          <Pressable style={styles.secondaryCta} onPress={onOpenWeb}>
            <MaterialIcons name="public" size={18} color="#2f4421" />
            <Text style={styles.secondaryCtaText}>Abrir sitio web</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}
