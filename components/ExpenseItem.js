import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { getcurrentdate } from "../Util/date";

export default function ExpenseItem({ description, amount, date, id }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("manage", {
          id: id,
        });
      }}
      style={({ pressed }) => [pressed && { opacity: 0.7 }]}
    >
      <View style={styles.expenseitem}>
        <View>
          <Text style={[styles.desciption, styles.textbase]}>
            {description}
          </Text>
          <Text style={styles.textbase}>{getcurrentdate(date)}</Text>
        </View>

        <View style={styles.amountcontainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  expenseitem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 17,
    elevation: 3,
  },
  textbase: {
    color: "black",
  },

  desciption: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountcontainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: "cyan",
    fontWeight: "bold",
  },
});
