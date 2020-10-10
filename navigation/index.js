import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import MediaScreen from "../screens/MediaScreen";
import LoginScreen from "../screens/LoginScreen";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import UserListScreen from "../screens/UserListScreen";
import TweetScreen from "../screens/TweetScreen";
import DrawerContent from "../components/DrawerContent";
import FeedScreen from "../screens/FeedScreen";
import RootTabBar from "../components/RootTabBar";
import ProfileTabBar from "../components/ProfileTabBar";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
export default function RootNavigator() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} headerMode="none">
        {!isLogin && <Stack.Screen name="Login" component={LoginScreen} />}
        <Stack.Screen name="Root" component={DrawerNavigator} />
        <Stack.Screen name="Media" component={MediaScreen} />
        <Stack.Screen name="Profile" component={ProfileNavigator} />
        <Stack.Screen name="Tweet" component={TweetScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={MyTabs} />
      <Drawer.Screen name="NotFound" component={NotFoundScreen} />
    </Drawer.Navigator>
  );
}
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <RootTabBar {...props} />}
      backBehavior="initialRoute"
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Video" component={FeedScreen} />
      <Tab.Screen name="Photo" component={FeedScreen} />
    </Tab.Navigator>
  );
}
function ProfileNavigator() {
  console.log(ProfileTabBar, "ProfileTabBar");
  return (
    <Tab.Navigator
      tabBar={(props) => <ProfileTabBar {...props} />}
      backBehavior="initialRoute"
    >
      <Tab.Screen name="Tweet" component={FeedScreen} />
      <Tab.Screen name="Video" component={FeedScreen} />
      <Tab.Screen name="Photo" component={FeedScreen} />
      <Tab.Screen name="Like" component={FeedScreen} />
    </Tab.Navigator>
  );
}
