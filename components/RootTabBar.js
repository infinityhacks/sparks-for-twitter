import React from "react";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import TabBar from "./TabBar";
export default function RootTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <RootTabWarpper>
      <SideIcon style={{ position: "relative", right: 10 }}>
        <Ionicons
          name="md-menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </SideIcon>
      <TabBar {...{ state, descriptors, navigation, position }} />
      <SideIcon style={{ position: "relative", left: 10 }}>
        <Ionicons
          name="md-search"
          size={30}
          color="white"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
      </SideIcon>
    </RootTabWarpper>
  );
}
const RootTabWarpper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: "rgba(33, 33, 33, 1)";
`;
const SideIcon = styled.View`
  flex: 2;
  align-items: center;
`;
