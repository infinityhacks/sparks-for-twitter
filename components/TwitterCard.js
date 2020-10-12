import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import CardMedia from "./CardMedia";
import moment from "moment";
export default function TwitterCard({ navigation, ...props }) {
  return (
    <CardWrapper>
      {props.retweeted_status && (
        <RetweetText>
          <FontAwesome5 name="share" size={22} color="white" />
          {props.user.name}{" "}
        </RetweetText>
      )}
      <CardHeader
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <AvatarWrapper>
          <Avatar.Image
            source={{
              uri: props.retweeted_status
                ? props.retweeted_status.user.profile_image_url_https
                : props.user.profile_image_url_https,
            }}
            size={40}
          />
        </AvatarWrapper>
        <UserInfoWrapper>
          <UserNickname>
            {props.retweeted_status
              ? props.retweeted_status.user.name
              : props.user.name}
          </UserNickname>
          <UserName>
            @
            {props.retweeted_status
              ? props.retweeted_status.user.screen_name
              : props.user.screen_name}
          </UserName>
        </UserInfoWrapper>
        <TweetTime>
          {moment(
            props.retweeted_status
              ? props.retweeted_status.created_at
              : props.created_at
          ).fromNow()}
        </TweetTime>
      </CardHeader>
      <TouchableTweet
        onPress={() => {
          navigation.navigate("Detail", props);
        }}
      >
        <TweetWrapper>
          {props.retweeted_status ? props.retweeted_status.text : props.text}
        </TweetWrapper>
      </TouchableTweet>
      {props.retweeted_status && props.retweeted_status.extended_entities && (
        <MediaWrapper>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                props.retweeted_status.extended_entities.media[0].type ===
                  "video"
                  ? "VideoDemo"
                  : "PhotoDemo",
                props
              );
            }}
            style={{ width: Dimensions.get("window").width, height: 250 }}
          >
            <CardMedia media={props.retweeted_status.extended_entities.media} />
          </TouchableOpacity>
          {props.retweeted_status.extended_entities.media[0].type ===
            "video" && (
            <MediaInfo>
              <Feather name="play-circle" size={50} color="white" />
            </MediaInfo>
          )}
        </MediaWrapper>
      )}
      {!props.retweeted_status && props.extended_entities && (
        <MediaWrapper>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                props.extended_entities.media[0].type === "video"
                  ? "VideoDemo"
                  : "PhotoDemo",
                props
              );
            }}
            style={{ width: Dimensions.get("window").width, height: 250 }}
          >
            <CardMedia media={props.extended_entities.media} />
          </TouchableOpacity>
          {props.extended_entities.media[0].type === "video" && (
            <MediaInfo>
              <Feather name="play-circle" size={50} color="white" />
            </MediaInfo>
          )}
        </MediaWrapper>
      )}
      <CardFooter>
        <CommentWrapper>
          <FontAwesome5 name="comment" size={22} color="white" />
          &nbsp;&nbsp;
        </CommentWrapper>
        <LikeWrapper>
          <FontAwesome5 name="heart" size={22} color="white" />
          &nbsp;&nbsp;
          {props.favorite_count}
        </LikeWrapper>
        <ShareWrapper>
          <FontAwesome5 name="share" size={22} color="white" />
          &nbsp;&nbsp;
          {props.retweet_count}
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
  margin-bottom: 5px;
`;
const RetweetText = styled.Text`
  font-size: 18px;
  background-color: "rgba(33, 33, 33, 1)";
  color: "rgba(255,255,255,0.6)";
  line-height: 40px;
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
  flex: 3;
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
  position: absolute;
  top: 100px;
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
  margin: 10px;
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
