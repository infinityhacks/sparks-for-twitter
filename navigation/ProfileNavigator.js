import React, { useState } from "react";
import { connect } from "react-redux";
import FeedScreen from "../screens/FeedScreen";
import ProfileTabBar from "../components/ProfileTabBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function ProfileNavigator(props) {
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
