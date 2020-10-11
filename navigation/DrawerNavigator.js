import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "./HomeTab";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={HomeTabs} />
    </Drawer.Navigator>
  );
}

