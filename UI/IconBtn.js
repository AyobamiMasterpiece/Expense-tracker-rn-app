import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconBtn({ name, color, size, onpress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && style.pressed}
      onPress={onpress}
    >
      <View style={style.btncontain}>
        <Ionicons name={name} color={color} size={size}></Ionicons>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  btncontain: {
    padding: 10,
    borderRadius: 50,
    height: 60,
    width: 60,
    // backgroundColor: "yellow",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white",
  },
  pressed: {
    opacity: 0.5,
  },
});
