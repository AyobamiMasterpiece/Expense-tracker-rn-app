import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExpenseSummary({ period, expenses }) {
  // console.log(expenses);
  const sum = expenses.reduce((sum, crr) => {
    return sum + crr.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  period: {
    fontSize: 12,
    color: "red",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: "pink",
  },
});
