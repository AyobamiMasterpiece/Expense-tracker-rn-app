import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function Input({ label, inputprops, style, isvalid }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, !isvalid && styles.errorlabel]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          !isvalid && styles.errorinput,
          inputprops.multiline && {
            minHeight: 100,
            maxHeight: 200,
          },
        ]}
        {...inputprops}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "purple",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  errorlabel: {
    color: "red",
  },
  errorinput: {
    backgroundColor: "red",
  },
});
