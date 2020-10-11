import React, { useState, useEffect } from "react";
import { View, AsyncStorage } from "react-native";
import styled from "styled-components";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Avatar, Drawer, TouchableRipple, Switch } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DrawerContent(props) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("user_info").then(res => {
      console.log(JSON.parse(res))
      setUserInfo(JSON.parse(res))
    })
  })
  return (
    <DrawerWarpper style={{ flex: 1 }}>
      <Drawer.Section>
        <UserInfoWarpper>
          <UserInfo>
            <AvatarWrapper
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            >
              <Avatar.Image
                source={{
                  uri: userInfo.profile_image_url_https,
                }}
                size={50}
              />
            </AvatarWrapper>

            <UserStatus>
              <Location>
                <Entypo name="location-pin" size={24} color="white" />
                Beijing, China
              </Location>
              <JoinTime>Join in June 2016</JoinTime>
            </UserStatus>
          </UserInfo>
          <UserStatusWrapper>
            <UserStatus>
              <Location>Troye Guo</Location>
              <JoinTime>@troye_guo</JoinTime>
            </UserStatus>
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                alignContent: "flex-start",
              }}
            >
              <MaterialIcons
                name="expand-more"
                size={24}
                color="rgba(21, 190, 128, 1)"
              />
            </View>

            <MoreUser>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={25}
              />
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={25}
              />
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={25}
              />
            </MoreUser>
          </UserStatusWrapper>
        </UserInfoWarpper>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <DrawerSectionWrapper>
          <Drawer.Section style={{ marginTop: 15 }}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color="white" size={25} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home", props);
              }}
              labelStyle={{ color: "white" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color="white" size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
              labelStyle={{ color: "white" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color="white" size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookmarkScreen");
              }}
              labelStyle={{ color: "white" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color="white" size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
              labelStyle={{ color: "white" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color="white" size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
              labelStyle={{ color: "white" }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color="white" size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
              labelStyle={{ color: "white" }}
            />
          </Drawer.Section>
        </DrawerSectionWrapper>
      </DrawerContentScrollView>
      <Drawer.Section>
        <TouchableRipple>
          <SwitchWrapper>
            <SwitchItem>
              <SwitchText>Dark Theme</SwitchText>
              <View pointerEvents="none">
                <Switch />
              </View>
            </SwitchItem>
            <SwitchItem>
              <SwitchText>Grid Mode</SwitchText>
              <View pointerEvents="none">
                <Switch />
              </View>
            </SwitchItem>
          </SwitchWrapper>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section>
        <TouchableRipple>
          <UpgradeWrapper>
            <MaterialCommunityIcons name="crown" size={28} color="white" />
            <UpgradeText>Upgrade</UpgradeText>
          </UpgradeWrapper>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerWarpper>
  );
}
const AvatarWrapper = styled.TouchableOpacity``;
const DrawerWarpper = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,1)";
`;
const UserInfoWarpper = styled.View`
  padding-left: 20px;
  padding-right: 15px;
  height: 130px;
  background-color: "rgba(33,33,33,1)";
`;
const UserInfo = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;
const UserStatusWrapper = styled.View`
  flex-direction: row;
  position: relative;
  right: 10px;
`;
const UserStatus = styled.View`
  flex: 3;
  margin-left: 15px;
  flex-direction: column;
`;
const MoreUser = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
const Location = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  font-family: Roboto-Medium;
  color: "rgba(255,255,255,1)";
  line-height: 30px;
`;
const JoinTime = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: "rgba(255,255,255,1)";
  opacity: 0.5;
`;
const DrawerSectionWrapper = styled.View`
  flex: 1;
  width: 234px;
  height: 361px;
  background: #232323;
  opacity: 1;
  border-radius: 18px;
  margin: 20px;
`;
const SwitchWrapper = styled.View`
  flex-direction: column;
  width: 234px;
  height: 106px;
  background: #232323;
  opacity: 1;
  border-radius: 18px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const SwitchItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
`;
const SwitchText = styled.Text`
  color: "rgba(255,255,255,1)";
`;
const UpgradeWrapper = styled.View`
  width: 188px;
  height: 48px;
  background: #15be80;
  opacity: 1;
  border-radius: 32px;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 40px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;
const UpgradeText = styled.Text`
  color: white;
  font-size: 18px;
  margin-left: 10px;
`;
