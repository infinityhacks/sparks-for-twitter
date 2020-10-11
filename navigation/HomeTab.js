import React, { useState } from "react";
import { connect } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "../screens/FeedScreen";
import RootTabBar from "../components/RootTabBar";

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
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