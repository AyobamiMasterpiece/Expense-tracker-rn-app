import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import { expensesContext } from "../Context/ExpensesContext";

export default function ExpenseOutput({ period, expenses, fallbacktext }) {
  let content = (
    <Text
      style={{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: "50%",
      }}
    >
      {fallbacktext}
    </Text>
  );
  const isempty = expenses.length == 0;
  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses}></ExpenseList>;
  }
  return (
    <View style={[styles.container]}>
      <ExpenseSummary expenses={expenses} period={period}></ExpenseSummary>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "white",
    flex: 1,
  },
});
