import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecentExpense from "./screens/RecentExpense";
import ManageExpense from "./screens/ManageExpense";
import AllExpense from "./screens/AllExpense";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconBtn from "./UI/IconBtn";
import ExpensesContext from "./Context/ExpensesContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarLabelStyle: {
          fontSize: 15,
          color: "pink",
        },
        tabBarIconStyle: {
          backgroundColor: "cyan",
        },
        tabBarStyle: {
          backgroundColor: "cyan",
        },
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "black",
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "white",
        headerRight: () => (
          <IconBtn
            name={"add"}
            color={"white"}
            size={30}
            onpress={() => navigation.navigate("manage")}
          ></IconBtn>
        ),
        // tabBarActiveBackgroundColor: "red",
      })}
    >
      <Tab.Screen
        component={RecentExpense}
        name="recent"
        options={({ navigation }) => ({
          tabBarLabel: "Recent",
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="time" size={size}></Ionicons>;
          },
          // headerBackgroundContainerStyle: {
          //   backgroundColor: "black",
          // },
        })}
      ></Tab.Screen>
      <Tab.Screen
        component={AllExpense}
        name="all"
        options={{
          tabBarLabel: "All",
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="calendar-outline"
                color={color}
                size={size}
              ></Ionicons>
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <ExpensesContext>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Home}
              name="home"
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              component={ManageExpense}
              name="manage"
              options={{
                headerStyle: {
                  backgroundColor: "purple",
                },
                headerTintColor: "yellow",
                // presentation: "modal",
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContext>
      <StatusBar style="light" />
    </>
  );
}
