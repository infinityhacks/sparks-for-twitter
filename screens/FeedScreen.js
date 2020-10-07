import React, { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import TwitterCard from "../components/TwitterCard";
import TwitterGrid from "../components/TwitterGrid";
import FakeData from "../mocks/timeline.json";
export default function FeedScreen(props) {
  const renderItem = ({ item }) => (
    <TwitterCard {...item} navigation={props.navigation} />
  );
  return (
    <FeedWrapper>
      <FlatList
        data={FakeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TweetButton
        onPress={() => {
          props.navigation.navigate("Tweet");
        }}
      >
        <MaterialIcons name="edit" size={26} color="white" />
      </TweetButton>
    </FeedWrapper>
  );
}

const FeedWrapper = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,1)";
  padding-top: 3px;
  padding-bottom: 3px;
`;
const TweetButton = styled.TouchableOpacity`
  width: 58px;
  height: 58px;
  background: #15be80;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.16);
  border-radius: 29px;
  opacity: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
