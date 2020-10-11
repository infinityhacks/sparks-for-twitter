import React, { useState } from "react";
import { connect } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeTabs from "./HomeTab";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={HomeTabs} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo,
  };
};
const actionCreator = {};
export default connect(mapStateToProps, actionCreator)(DrawerNavigator);
