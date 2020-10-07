import React, { useState, useEffect } from "react";
import TabBar from "./TabBar";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import FakeData from "../mocks/user.json";
import { Avatar } from "react-native-paper";
import { View } from "react-native";
export default function ProfileTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <ProfileHeader>
      <ProfileOperation>
        <ReturnWrapper
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ReturnIcon>
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </ReturnIcon>
        </ReturnWrapper>

        <BlockIcon></BlockIcon>
        <BlockIcon>
          <Entypo name="block" size={20} color="white" /> Block
        </BlockIcon>
        <FollowIcon>
          <SimpleLineIcons name="user-follow" size={20} color="white" />
          Follow
        </FollowIcon>
      </ProfileOperation>
      <AvatarWrapper>
        <Avatar.Image
          source={{
            uri: FakeData.avatar,
          }}
          size={100}
        />
        <UserName>{FakeData.nickname}</UserName>
      </AvatarWrapper>
      <UserDesc>{FakeData.user_desc}</UserDesc>
      <UserData>
        <DataWrapper>
          <DataCount>{FakeData.tweets}</DataCount>
          <DataName>Tweets</DataName>
        </DataWrapper>
        <DataWrapper
          onPress={() => {
            navigation.navigate("UserList");
          }}
        >
          <DataCount>{FakeData.follower}</DataCount>
          <DataName>Follower</DataName>
        </DataWrapper>
        <DataWrapper>
          <DataCount>{FakeData.following}</DataCount>
          <DataName>Following</DataName>
        </DataWrapper>
        <DataWrapper>
          <DataCount>{FakeData.likes}</DataCount>
          <DataName>Likes</DataName>
        </DataWrapper>
      </UserData>
      <View style={{ flex: 1 }}>
        <TabBar
          {...{ state, descriptors, navigation, position }}
          style={{ height: 30 }}
        />
      </View>
    </ProfileHeader>
  );
}

const ProfileHeader = styled.View`
  flex-direction: column;
  background-color: "rgba(33,33,33,1)";
  height: 365px;
`;
const ProfileOperation = styled.View`
  flex-direction: row;
  height: 60px;
  margin-top: 10px;
`;
const ReturnWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ReturnIcon = styled.Text`
  color: "rgba(255,255,255,1)";

  text-align: center;
  line-height: 40px;
`;
const BlockIcon = styled.Text`
  color: "rgba(255,255,255,1)";
  text-align: center;
  font-size: 16px;
  flex: 2;
  line-height: 50px;
`;
const FollowIcon = styled.Text`
  color: "rgba(255,255,255,1)";
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  width: 90px;
  height: 40px;
  background: #15be80;
  opacity: 1;
  border-radius: 10px;
  margin: 5px;
  margin-right: 20px;
`;
const AvatarWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserName = styled.Text`
  color: "rgba(255,255,255,1)";
  font-size: 20px;
  margin: 5px;
`;
const UserDesc = styled.Text`
  color: "rgba(255,255,255,1)";
  font-size: 16px;
  opacity: 0.6;
  text-align: center;
  margin-bottom: 15px;
`;
const UserData = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 50px;
  margin-right: 50px;
`;
const DataWrapper = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  flex-direction: column;
  color: "rgba(255,255,255,1)";
`;
const DataName = styled.Text`
  text-align: center;
  color: "rgba(255,255,255,1)";
  font-size: 13px;
`;
const DataCount = styled.Text`
  color: "rgba(255,255,255,1)";
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
