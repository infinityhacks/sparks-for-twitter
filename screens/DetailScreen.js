import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import TwitterCard from "../components/TwitterCard";
import FakeTweets from "../mocks/timeline.json";
import FakeComments from "../mocks/comments.json";
import { Dimensions, TouchableOpacity, FlatList, View } from "react-native";
export default function DetailScreen({ navigation, route, ...props }) {
  const renderItem = ({ item }) => {
    return (
      <CardWrapper>
        <CardHeader>
          <AvatarWrapper>
            <Avatar.Image
              source={{
                uri: item.avatar,
              }}
              size={40}
            />
          </AvatarWrapper>
          <UserInfoWrapper>
            <UserNickname>{item.nickname}</UserNickname>
            <UserName>@{item.username}</UserName>
          </UserInfoWrapper>
          <TweetTime>{item.tweet_time}</TweetTime>
        </CardHeader>
        <TweetWrapper>{item.comment}</TweetWrapper>
        <CardFooter>
          <CommentWrapper>
            <FontAwesome5 name="comment" size={22} color="white" />
            &nbsp;&nbsp;
            {item.comment_count}
          </CommentWrapper>
          <LikeWrapper>
            <FontAwesome5 name="heart" size={22} color="white" />
            &nbsp;&nbsp;
            {item.like_count}
          </LikeWrapper>
          <ShareWrapper>
            <FontAwesome5 name="share" size={22} color="white" />
            &nbsp;&nbsp;
            {item.share_count}
          </ShareWrapper>
          <MoreWrapper>
            <Ionicons name="ios-more" size={24} color="white" />
          </MoreWrapper>
        </CardFooter>
      </CardWrapper>
    );
  };
  return (
    <DetailScreenWrapper>
      <FlatList
        ListHeaderComponent={
          <TwitterCard {...route.params} navigation={navigation} />
        }
        data={FakeComments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </DetailScreenWrapper>
  );
}
const DetailScreenWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: "rgba(0,0,0,1)";
`;
const CardWrapper = styled.View`
  flex-direction: column;
  background-color: "rgba(33, 33, 33, 1)";
  margin-top: 3px;
  margin-bottom: 3px;
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
