import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";
export default function TwitterGrid({ navigation, ...props }) {
  return (
    <CardWrapper>
      <MediaWrapper>
        <TouchableOpacity
          onPress={() => {
            console.log("media");
            navigation.navigate("Media", props);
          }}
          style={{
            width: Dimensions.get("window").width / 2 - 10,
            height: 150,
          }}
        >
          <MediaCover source={{ uri: props.media_url }} />
        </TouchableOpacity>

        <MediaInfo>
          <MediaTime>
            {props.media_time}&nbsp;&nbsp;
            <FontAwesome5 name="video" size={18} color="white" />
          </MediaTime>
        </MediaInfo>
      </MediaWrapper>
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
  margin: 3px;
  width: ${Dimensions.get("window").width / 2 - 10}px;
  border-radius: 10px;
  overflow: hidden;
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

const MoreWrapper = styled.Text`
  flex: 2;
  text-align: right;
  margin-right: 15px;
`;
