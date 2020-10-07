import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar, TouchableRipple } from "react-native-paper";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Dimensions, TouchableOpacity, Text } from "react-native";
export default function TwitterCard({ route, navigation }) {
  const [imageHeight, setImageHeight] = useState();
  Image.getSize(route.params.media_url, (width, height) => {
    setImageHeight((height / width) * Dimensions.get("window").width);
  });

  return (
    <CardWrapper>
      <CardHeaderWrapper>
        <CardHeader>
          <AvatarWrapper>
            <Avatar.Image
              source={{
                uri: route.params.avatar,
              }}
              size={40}
            />
          </AvatarWrapper>
          <UserInfoWrapper>
            <UserNickname>{route.params.nickname}</UserNickname>
            <UserName>@{route.params.username}</UserName>
          </UserInfoWrapper>
          <TweetTime>{route.params.tweet_time}</TweetTime>
        </CardHeader>
        <TweetWrapper>{route.params.tweet}</TweetWrapper>
      </CardHeaderWrapper>
      {imageHeight && (
        <MediaCover
          source={{ uri: route.params.media_url }}
          style={{ width: Dimensions.get("window").width, height: imageHeight }}
        />
      )}
      <CardFooterWrapper>
        <CardFooter>
          <CommentWrapper>
            <FontAwesome5 name="comment" size={22} color="white" />
          </CommentWrapper>
          <LikeWrapper>
            <FontAwesome5 name="heart" size={22} color="white" />
          </LikeWrapper>
          <ShareWrapper>
            <FontAwesome5 name="share" size={22} color="white" />
          </ShareWrapper>
          <DownLoadWrapper>
            <FontAwesome5 name="download" size={22} color="white" />
          </DownLoadWrapper>
          <MoreWrapper>
            <Ionicons name="ios-more" size={24} color="white" />
          </MoreWrapper>
          <MoreWrapper></MoreWrapper>
          <NextWrapper>
            <Ionicons name="ios-arrow-dropdown" size={16} color="white" />
            Next
          </NextWrapper>
        </CardFooter>
        <TrackWrapper>
          <MediaTime>{route.params.media_time}</MediaTime>
          <Track>
            <TrackPlayed></TrackPlayed>
          </Track>
        </TrackWrapper>
      </CardFooterWrapper>
    </CardWrapper>
  );
}
const CardWrapper = styled.View`
  flex: 1;
  background-color: "rgba(33, 33, 33, 1)";
  justify-content: space-between;
  align-items: center;
`;
const CardHeader = styled.View`
  flex-direction: row;
`;
const CardHeaderWrapper = styled.View`
  flex-direction: column;
  width: ${Dimensions.get("window").width}px;
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
  flex: 1;
`;
const MediaCover = styled.Image``;
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
  color: "rgba(255,255,255,1)";
  font-size: 16px;
  text-align: right;
`;
const CardFooter = styled.View`
  flex-direction: row;
  position: relative;
  bottom: 10px;
`;
const CommentWrapper = styled.Text`
  flex: 1;
  color: "rgba(255,255,255,1)";
  text-align: center;
  font-size: 18px;
`;
const LikeWrapper = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: "rgba(255,255,255,1)";
`;
const ShareWrapper = styled.Text`
  flex: 1;
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
const NextWrapper = styled.Text`
  text-align: center;
  width: 82px;
  height: 33px;
  border: 1px solid #ffffff;
  opacity: 1;
  border-radius: 9px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  line-height: 33px;
`;
const TrackWrapper = styled.View`
  height: 35px;
`;
const Track = styled.View`
  width: 364px;
  height: 3px;
  background-color: #ffffff;
  opacity: 0.28;
  border-radius: 2px;
`;
const TrackPlayed = styled.View`
  width: 266px;
  height: 3px;
  background-color: #ffffff;
  opacity: 1;
  border-radius: 2px;
`;
const CardFooterWrapper = styled.View``;
