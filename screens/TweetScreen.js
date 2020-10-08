import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import fakeData from "../mocks/timeline.json";
export default function TweetScreen(props) {
  return (
    <TweetWarpper>
      <TweetHeader>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ marginTop: 15 }}
        >
          <CancelWrapper>
            <AntDesign name="close" size={24} color="white" />
            Cancel
          </CancelWrapper>
        </TouchableOpacity>

        <SubmitWrapper>
          <FontAwesome
            name="paper-plane"
            size={24}
            color="rgba(21, 190, 128, 1)"
          />
          Submit
        </SubmitWrapper>
      </TweetHeader>
      <EditArea>
        <PlaceHolder>What's new ?</PlaceHolder>
        <CardWrapper>
          <CardHeader>
            <AvatarWrapper>
              <Avatar.Image
                source={{
                  uri: fakeData[0].avatar,
                }}
                size={40}
              />
            </AvatarWrapper>
            <UserInfoWrapper>
              <UserNickname>{fakeData[0].nickname}</UserNickname>
              <UserName>@{fakeData[0].username}</UserName>
            </UserInfoWrapper>
            <TweetTime>{fakeData[0].tweet_time}</TweetTime>
          </CardHeader>
          <TweetWrapper>{fakeData[0].tweet}</TweetWrapper>
          <MediaWrapper>
            <TouchableOpacity
              onPress={() => {
                console.log("media");
                navigation.navigate("Media", props);
              }}
              style={{
                width: Dimensions.get("window").width - 20,
                height: 250,
              }}
            >
              <MediaCover source={{ uri: fakeData[0].media_url }} />
            </TouchableOpacity>
          </MediaWrapper>
        </CardWrapper>
      </EditArea>
      <TweetOption>
        <PublicView>
          <MaterialCommunityIcons
            name="earth"
            size={22}
            color="rgba(21, 190, 128, 1)"
          />
          Anyone can see
        </PublicView>
        <ChooseImage>
          <Ionicons name="md-image" size={22} color="white" />
          (3/4)
        </ChooseImage>
      </TweetOption>
      <MediaDemo>
        <TouchableOpacity
          style={{
            width: 150,
            height: 100,
            margin: 5,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <MediaItem source={{ uri: fakeData[0].media_url }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 100,
            margin: 5,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <MediaItem source={{ uri: fakeData[0].media_url }} />
        </TouchableOpacity>
      </MediaDemo>
    </TweetWarpper>
  );
}
const TweetWarpper = styled.View`
  flex: 1;
  background-color: "rgba(33,33,33,1)";
`;
const TweetHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;
const CancelWrapper = styled.Text`
  color: "rgba(255,255,255,1)";
  flex: 1;
  text-align: left;
  padding-left: 20px;
  font-size: 18px;
`;
const SubmitWrapper = styled.Text`
  flex: 1;
  color: "rgba(21, 190, 128, 1)";
  text-align: right;
  padding-right: 20px;
  font-size: 18px;
`;
const EditArea = styled.View`
  height: 530px;
  background-color: "rgba(0,0,0,1)";
  position: relative;
`;
const PlaceHolder = styled.Text`
  color: "rgba(255, 255, 255, 0.5)";
  margin: 10px;
  font-size: 20px;
`;
const TweetOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;
const PublicView = styled.Text`
  flex: 1;
  color: "rgba(21, 190, 128, 1)";
  text-align: left;
  padding-left: 20px;
  font-size: 18px;
`;
const ChooseImage = styled.Text`
  width: 87px;
  height: 32px;
  background: #15be80;
  opacity: 1;
  border-radius: 22px;
  margin-right: 20px;
  font-size: 18px;
  color: "rgba(255,255,255,1)";
  padding-left: 12px;
  padding-top: 2px;
`;
const MediaDemo = styled.View`
  flex-direction: row;
  flex: 3;
  margin-left: 5px;
`;
const MediaItem = styled.Image`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const CardWrapper = styled.View`
  flex-direction: column;
  background-color: "rgba(33, 33, 33, 1)";
  margin: 10px;
  position: absolute;
  top: 170px;
`;
const CardHeader = styled.View`
  flex-direction: row;
`;
const AvatarWrapper = styled.View`
  margin: 10px;
  margin-left: 15px;
`;
const UserInfoWrapper = styled.View`
  flex: 4;
  flex-direction: column;
  justify-content: center;
`;
const UserNickname = styled.Text`
  color: "rgba(255,255,255,1)";
`;
const UserName = styled.Text`
  color: "rgba(255,255,255,0.6)";
`;
const TweetTime = styled.Text`
  flex: 2;
  text-align: center;
  color: "rgba(255,255,255,1)";
  line-height: 60px;
`;
const TweetWrapper = styled.Text`
  color: "rgba(255,255,255,1)";
  margin: 10px;
  margin-top: 0px;
`;
const MediaWrapper = styled.View`
  flex: 3;
`;
const MediaCover = styled.Image`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
