import React from "react";
import { Animated, Image, Platform, Pressable, View } from "react-native";
import {
  HOME_BANNER,
  HOME_BANNER_CATALOGOS,
  HOME_BANNER_CATALOGOS_RATIO,
  HOME_BANNER_CONTACTO,
  HOME_BANNER_CONTACTO_RATIO,
  HOME_BANNER_LUXOMETRO,
  HOME_BANNER_LUX_RATIO,
  HOME_BANNER_RATIO
} from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function HomeSection({ fades, onSelectSection }) {
  const webBannerWrap = Platform.OS === "web" ? styles.homeBannerWrapWeb : null;
  const webPressable = Platform.OS === "web" ? styles.homeBannerPressableWeb : null;
  const renderBanner = (source, ratio, section) => (
    <Pressable
      style={[styles.homeBannerPressable, webPressable, { aspectRatio: ratio }]}
      onPress={() => onSelectSection(section)}
    >
      <Image source={source} style={styles.homeBannerImage} resizeMode="cover" />
    </Pressable>
  );

  return (
    <View style={[styles.homeWrap, webBannerWrap]}>
      <Animated.View style={{ opacity: fades.one }}>
        {renderBanner(HOME_BANNER, HOME_BANNER_RATIO, "asistente")}
      </Animated.View>
      <Animated.View style={{ opacity: fades.two }}>
        <View style={styles.homeBannerSpacer}>
          {renderBanner(HOME_BANNER_LUXOMETRO, HOME_BANNER_LUX_RATIO, "luxometro")}
        </View>
      </Animated.View>
      <Animated.View style={{ opacity: fades.three }}>
        <View style={styles.homeBannerSpacer}>
          {renderBanner(HOME_BANNER_CATALOGOS, HOME_BANNER_CATALOGOS_RATIO, "catalogos")}
        </View>
      </Animated.View>
      <Animated.View style={{ opacity: fades.four }}>
        <View style={styles.homeBannerSpacer}>
          {renderBanner(HOME_BANNER_CONTACTO, HOME_BANNER_CONTACTO_RATIO, "contacto")}
        </View>
      </Animated.View>
    </View>
  );
}
