import React from "react";
import { FlatList, View, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => {
        return <ExpenseItem {...item}></ExpenseItem>;
      }}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    ></FlatList>
  );
}
