import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
export default function TwitterCard({ navigation, ...props }) {
  return (
    <CardWrapper>
      <CardHeader
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <AvatarWrapper>
          <Avatar.Image
            source={{
              uri: props.avatar,
            }}
            size={40}
          />
        </AvatarWrapper>
        <UserInfoWrapper>
          <UserNickname>{props.nickname}</UserNickname>
          <UserName>@{props.username}</UserName>
        </UserInfoWrapper>
        <TweetTime>{props.tweet_time}</TweetTime>
      </CardHeader>
      <TouchableTweet
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <TweetWrapper>{props.tweet}</TweetWrapper>
      </TouchableTweet>
      <MediaWrapper>
        <TouchableOpacity
          onPress={() => {
            console.log("media");
            navigation.navigate("Media", props);
          }}
          style={{ width: Dimensions.get("window").width, height: 250 }}
        >
          <MediaCover source={{ uri: props.media_url }} />
        </TouchableOpacity>

        <MediaInfo>
          <WatchCount>{props.media_count} views</WatchCount>
          <MediaTime>
            {props.media_time}&nbsp;&nbsp;
            <FontAwesome5 name="video" size={18} color="white" />
          </MediaTime>
        </MediaInfo>
      </MediaWrapper>
      <CardFooter>
        <CommentWrapper>
          <FontAwesome5 name="comment" size={22} color="white" />
          &nbsp;&nbsp;
          {props.comment_count}
        </CommentWrapper>
        <LikeWrapper>
          <FontAwesome5 name="heart" size={22} color="white" />
          &nbsp;&nbsp;
          {props.like_count}
        </LikeWrapper>
        <ShareWrapper>
          <FontAwesome5 name="share" size={22} color="white" />
          &nbsp;&nbsp;
          {props.share_count}
        </ShareWrapper>
        <DownLoadWrapper>
          <FontAwesome5 name="download" size={22} color="white" />
        </DownLoadWrapper>
        <MoreWrapper>
          <Ionicons name="ios-more" size={24} color="white" />
        </MoreWrapper>
      </CardFooter>
    </CardWrapper>
  );
}

const CardWrapper = styled.View`
  flex-direction: column;
  background-color: "rgba(33, 33, 33, 1)";
  margin-bottom: 3px;
  height: 380px;
`;
const CardHeader = styled.TouchableOpacity`
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
const TouchableTweet = styled.TouchableOpacity``;
const TweetWrapper = styled.Text`
  color: "rgba(255,255,255,1)";
  margin: 10px;
  margin-top: 0px;
`;
const MediaWrapper = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const MediaCover = styled.Image`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const WatchCount = styled.Text`
  flex: 1;
  color: "rgba(255,255,255,1)";
  font-size: 16px;
  margin-left: 10px;
  text-align: left;
  line-height: 20px;
`;
const MediaInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  bottom: 30px;
`;
const MediaTime = styled.Text`
  flex: 1;
  color: "rgba(255,255,255,1)";
  font-size: 16px;
  text-align: right;
  margin-right: 10px;
  line-height: 20px;
`;
const CardFooter = styled.View`
  flex-direction: row;
  position: relative;
  bottom: 10px;
`;
const CommentWrapper = styled.Text`
  flex: 2;
  color: "rgba(255,255,255,1)";
  text-align: center;
  font-size: 18px;
`;
const LikeWrapper = styled.Text`
  flex: 2;
  text-align: center;
  font-size: 18px;
  color: "rgba(255,255,255,1)";
`;
const ShareWrapper = styled.Text`
  flex: 2;
  text-align: center;
  font-size: 18px;

  color: "rgba(255,255,255,1)";
`;
const DownLoadWrapper = styled.Text`
  flex: 1;
  text-align: center;
`;
const MoreWrapper = styled.Text`
  flex: 1;
  text-align: center;
`;
