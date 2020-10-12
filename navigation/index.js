import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import VideoScreen from "../screens/VideoScreen";
import PhotoScreen from "../screens/PhotoScreen";
import LoginScreen from "../screens/LoginScreen";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import MediaScreen from '../screens/MediaScreen'
import SearchScreen from "../screens/SearchScreen";
import UserListScreen from "../screens/UserListScreen";
import TweetScreen from "../screens/TweetScreen";
import DrawerNavigator from "./DrawerNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Root" component={DrawerNavigator} />
        <Stack.Screen name="MediaDemo" component={MediaScreen} />
        <Stack.Screen name="VideoDemo" component={VideoScreen} />
        <Stack.Screen name="PhotoDemo" component={PhotoScreen} />
        <Stack.Screen name="Profile" component={ProfileNavigator} />
        <Stack.Screen name="Tweet" component={TweetScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
