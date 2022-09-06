import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../components/LoginScreen";
import OnBoardingListScreen from "../components/OnBoardingListScreen";
import ContentDetailsScreen from "../components/ContentDetailsScreen";
import ProfileScreen from "../components/ProfileScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnBoardingList"
          component={OnBoardingListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          // options={{ title: 'Home' }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ContentDetails"
          component={ContentDetailsScreen}
          options={{
            // headerShown: false,
            // headerBackImageSource: require('../assets/images/back.png'),
            headerTintColor: "#1974D2",
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
