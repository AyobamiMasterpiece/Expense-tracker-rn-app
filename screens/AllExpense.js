import React, { useContext } from "react";
import { Text } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { expensesContext } from "../Context/ExpensesContext";

export default function AllExpense() {
  const [expenses] = useContext(expensesContext);
  return (
    <ExpenseOutput
      period={"Total"}
      expenses={expenses}
      fallbacktext={"You neva spend anything o"}
    ></ExpenseOutput>
  );
}
