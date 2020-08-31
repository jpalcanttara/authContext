import React from "react";
import { StatusBar } from "react-native";
import SignIn from "../pages/SignIn";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const Authroutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#f0f0f5",
        },
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  </>
);

export default Authroutes;
