import React from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DRAWER_WIDTH } from "../constants/appConstants";
import styles from "../styles/appStyles";

export default function SideDrawer({ drawerAnim, drawerOpen, onClose, onSelect }) {
  return (
    <>
      <Animated.View
        pointerEvents={drawerOpen ? "auto" : "none"}
        style={[
          styles.drawerOverlay,
          {
            opacity: drawerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.26]
            })
          }
        ]}
      >
        <Pressable style={styles.drawerOverlayTouch} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX: drawerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-DRAWER_WIDTH, 0]
                })
              }
            ]
          }
        ]}
      >
        <View style={styles.drawerHeader}>
          <View />
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#ffffff" />
          </Pressable>
        </View>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("inicio")}>
          <Text style={styles.drawerItemText}>inicio</Text>
        </Pressable>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("asistente")}>
          <Text style={styles.drawerItemText}>asistente</Text>
        </Pressable>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("luxometro")}>
          <Text style={styles.drawerItemText}>luxometro</Text>
        </Pressable>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("catalogos")}>
          <Text style={styles.drawerItemText}>catalogos</Text>
        </Pressable>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("fichas")}>
          <Text style={styles.drawerItemText}>fichas tecnicas</Text>
        </Pressable>
        <Pressable style={styles.drawerItem} onPress={() => onSelect("contacto")}>
          <Text style={styles.drawerItemText}>contacto</Text>
        </Pressable>
      </Animated.View>
    </>
  );
}
