import React, { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children, onpress, style, mode }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onpress}
        style={({ pressed }) => {
          return pressed && styles.pressed;
        }}
      >
        <View style={[styles.button, mode == "flat" && styles.flat]}>
          <Text style={[styles.btntext, mode == "flat" && styles.flattxt]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "purple",
  },
  flat: {
    backgroundColor: "transparent",
  },
  btntext: {
    color: "white",
    textAlign: "center",
  },
  flattxt: {
    color: "pink",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "red",
    borderRadius: 4,
  },
});
