import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { Keyboard, StyleSheet, Text, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import Button from "../UI/Button";
import { getcurrentdate } from "../Util/date";
import { expensesContext } from "../Context/ExpensesContext";
import DateInput from "./DateInput";
import { SendExpenses, updateExpenses } from "../Util/https";

export default function Form({ cancelhandler, isediting, updatedItem }) {
  const [expenses, dispatch] = useContext(expensesContext);
  const [date, setDate] = useState(updatedItem ? updatedItem.date : new Date());
  const [inputs, setInputs] = useState({
    amount: {
      value: updatedItem ? String(updatedItem.amount) : "",
      isValid: true,
    },
    description: {
      value: updatedItem ? updatedItem.description : "",
      isValid: true,
    },
  });
  const handleTextChange = (event, inputid) => {
    setInputs((old) => {
      return {
        ...old,
        [inputid]: {
          ...old[inputid],
          value: event,
        },
      };
    });
  };
  const confirmhandler = async () => {
    const newData = {
      description: inputs.description.value,
      amount: +inputs.amount.value,
      date: date,
    };
    const { description, amount } = newData;

    const isamountvalid = !isNaN(amount) && amount > 0;
    const isdesciptionvalid = description.trim().length > 0;
    if (!isamountvalid || !isdesciptionvalid) {
      setInputs((old) => {
        return {
          amount: {
            ...old.amount,
            isValid: isamountvalid,
          },
          description: {
            ...old.description,
            isValid: isdesciptionvalid,
          },
        };
      });
      return;
    }

    ///update
    if (isediting) {
      newData.id = updatedItem.id;
      await updateExpenses(updatedItem.id, newData);
      dispatch({
        type: "update",
        id: updatedItem.id,
        item: newData,
      });
      cancelhandler();
      return;
    }
    //add

    SendExpenses(newData).then((e) => {
      newData.id = e;
      dispatch({
        type: "add",
        newdata: newData,
      });
    });

    console.log("close");
  };

  const formisvalid = !inputs.amount.isValid || !inputs.description.isValid;
  return (
    <View>
      <View style={styles.inputrow}>
        <Input
          label={"Amount"}
          isvalid={inputs.amount.isValid}
          inputprops={{
            keyboardType: "decimal-pad",
            placeholder: "Amount",
            placeholderTextColor: "white",
            value: inputs.amount.value,
            maxLength: 11,
            onChangeText: (e) => handleTextChange(e, "amount"),
          }}
          style={{
            flex: 1,
          }}
        />
        <DateInput date={date} setDate={setDate} />
      </View>
      <Input
        label={"Description"}
        isvalid={inputs.description.isValid}
        inputprops={{
          multiline: true,
          textAlignVertical: "top",
          value: inputs.description.value,
          onChangeText: (e) => handleTextChange(e, "description"),
        }}
      />
      {formisvalid && <Text>Your form is invalid !</Text>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 140,
        }}
      >
        <Button
          mode={"flat"}
          onpress={cancelhandler}
          style={{ flex: 1, marginHorizontal: 10 }}
        >
          Cancel
        </Button>
        <Button
          onpress={() => confirmhandler()}
          style={{ flex: 1, marginHorizontal: 10 }}
        >
          {isediting ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
