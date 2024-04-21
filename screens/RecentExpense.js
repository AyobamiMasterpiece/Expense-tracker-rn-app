import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import ExpensesContext, { expensesContext } from "../Context/ExpensesContext";
import { getDays } from "../Util/date";
import { getExpenses } from "../Util/https";

export default function RecentExpense() {
  const [expenses, dispatch] = useContext(expensesContext);
  const [isFetching, setisfetching] = useState(true);
  useEffect(() => {
    getExpenses().then((e) => {
      setisfetching(false);
      let newExpenses = e;

      dispatch({
        type: "set",
        expenses: newExpenses,
      });
    });
  }, []);

  let today = new Date();
  const recentExpense = expenses.filter((item) => {
    let recent = getDays(today, 21);
    console.log(recent, "p");
    return item.date > recent;
  });
  if (isFetching) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <ExpenseOutput
      period={"Last 21 days"}
      expenses={recentExpense}
      fallbacktext={"You neva spend anything  for 21 days o"}
    ></ExpenseOutput>
  );
}
