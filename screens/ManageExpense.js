import React, { useContext, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import IconBtn from "../UI/IconBtn";
import Button from "../UI/Button";
import { expensesContext } from "../Context/ExpensesContext";
import Form from "../components/Form";
import { updateExpenses, deleteExpenses } from "../Util/https";

export default function ManageExpense({ navigation, route }) {
  const [expenses, dispatch] = useContext(expensesContext);
  const isediting = Boolean(route.params?.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isediting ? "Edit Expenses" : "Add Expenses",
    });
    return () => {
      console.log("unmount");
    };
  }, []);

  const updatedItem = expenses.find((item) => item.id == route.params?.id);

  const cancelhandler = () => {
    navigation.goBack();
  };
  const deletehandler = async () => {
    dispatch({
      type: "delete",
      id: route.params.id,
    });
    await deleteExpenses(route.params.id);

    cancelhandler();
  };
  return (
    <ScrollView style={styles.root}>
      <Form
        cancelhandler={cancelhandler}
        isediting={isediting}
        updatedItem={updatedItem}
      />

      {isediting && (
        <View style={styles.deletecontainer}>
          <IconBtn
            name={"trash"}
            color={"red"}
            size={36}
            onpress={deletehandler}
          ></IconBtn>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "cyan",
    padding: 20,
  },
  deletecontainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "pink",
    alignItems: "center",
  },
});
