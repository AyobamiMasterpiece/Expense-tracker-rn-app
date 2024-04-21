import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import IconBtn from "../UI/IconBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { getcurrentdate } from "../Util/date";

export default function DateInput({ style, date, setDate }) {
  console.log(date, "h");
  const handlepress = () =>
    DateTimePickerAndroid.open({
      value: date,
      onChange: (e, d) => {
        setDate(d);
      },
    });

  return (
    <View
      style={[
        style,
        {
          flex: 1,
          marginVertical: 15,
          marginHorizontal: 10,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Date
      </Text>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "purple",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {getcurrentdate(date)}
        </Text>
        <Pressable
          android_ripple={{
            color: "white",
            radius: 20,
            borderless: true,

            // foreground: true,
          }}
          onPress={() => {
            handlepress();
          }}
        >
          <View style={{}}>
            <Ionicons name="calendar" color={"white"} size={25} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
