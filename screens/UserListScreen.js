import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import { Avatar } from "react-native-paper";
import FakeData from "../mocks/followerList.json";
export default function UserListScreen(props) {
  const renderItem = ({ item }) => (
    <UserWrapper>
      <User>
        <AvatarWrapper>
          <Avatar.Image
            source={{
              uri: item.avatar,
            }}
            size={60}
          />
        </AvatarWrapper>
        <UserStatus>
          <Location>{item.nickname}</Location>
          <JoinTime>@{item.username}</JoinTime>
        </UserStatus>
        <BlockIcon>
          <Entypo name="block" size={20} color="white" />
        </BlockIcon>
        <FollowIcon>
          <SimpleLineIcons name="user-follow" size={20} color="white" />
        </FollowIcon>
      </User>
      <UserLine></UserLine>
    </UserWrapper>
  );
  return (
    <UserListWrapper>
      <UserHeader>
        <ReturnWrapper
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <ReturnIcon>
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </ReturnIcon>
        </ReturnWrapper>
        <UserTitle>Follower</UserTitle>
        <ReturnWrapper></ReturnWrapper>
      </UserHeader>
      <FlatList
        data={FakeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </UserListWrapper>
  );
}

const UserListWrapper = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,1)";
  padding-bottom: 3px;
`;
const UserHeader = styled.View`
  background-color: "rgba(33,33,33,1)";
  flex-direction: row;
  height: 60px;
`;
const UserTitle = styled.Text`
  flex: 1;
  font-size: 20px;
  color: "rgba(255,255,255,1)";
  padding-left: 34px;
  line-height: 60px;
`;
const ReturnWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`;
const ReturnIcon = styled.Text`
  color: "rgba(255,255,255,1)";

  text-align: center;
  line-height: 40px;
`;
const UserWrapper = styled.View`
  flex-direction: column;
  margin: 15px;
`;
const User = styled.View`
  flex-direction: row;
`;
const AvatarWrapper = styled.View`
  flex: 1;
`;
const BlockIcon = styled.Text`
  flex: 1;
  text-align: center;
  line-height: 50px;
`;
const FollowIcon = styled.Text`
  width: 36px;
  height: 31px;
  background: #15be80;
  opacity: 1;
  border-radius: 7px;
  margin-top: 10px;
  flex: 1;
  text-align: center;
  line-height: 30px;
`;
const UserLine = styled.View``;
const UserStatus = styled.View`
  flex: 3;
  margin-left: 15px;
  flex-direction: column;
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
