import React, { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import TwitterCard from "../components/TwitterCard";
import TwitterGrid from "../components/TwitterGrid";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import FakeTweets from "../mocks/timeline.json";
import FakeUsers from "../mocks/followerList.json";
function SearchScreen(props) {
  const renderTweets = ({ item }) => (
    <TwitterCard {...item} navigation={props.navigation} />
  );
  const renderUser = ({ item }) => {
    return (
      <SearchUser>
        <SearchAvatar>
          <Avatar.Image
            source={{
              uri: item.avatar,
            }}
            size={100}
          />
        </SearchAvatar>
        <SearchUserFollow>
          <Ionicons name="md-add" size={16} color="white" />
        </SearchUserFollow>
      </SearchUser>
    );
  };
  return (
    <SearchScreenWrapper>
      <SearchHeader>
        <SearchBox>
          <SearchBoxIcon>
            <Ionicons name="md-search" size={30} color="white" />
          </SearchBoxIcon>
          <SearchText>Morning</SearchText>
        </SearchBox>
        <SearchFilter>
          <FontAwesome5 name="filter" size={24} color="white" />
        </SearchFilter>
      </SearchHeader>
      <SearchResultWrapper>
        <FlatList
          ListHeaderComponent={
            <>
              <SearchResultTitle>Search Results</SearchResultTitle>
              <SearchUserWrapper>
                <FlatList
                  horizontal={true}
                  data={FakeUsers}
                  renderItem={renderUser}
                  keyExtractor={(item) => item.id}
                />
              </SearchUserWrapper>
            </>
          }
          data={props.homeTimeline}
          renderItem={renderTweets}
          keyExtractor={(item) => item.id}
        />
      </SearchResultWrapper>
    </SearchScreenWrapper>
  );
}
const mapStateToProps = (state) => {
  return { homeTimeline: state.login.homeTimeline };
};
const actionCreator = {};
export default connect(mapStateToProps, actionCreator)(SearchScreen);
const SearchScreenWrapper = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,1)";
  padding-bottom: 3px;
  flex-direction: column;
`;
const SearchHeader = styled.View`
  height: 81px;
  background: rgba(33, 33, 33, 1);
  flex-direction: row;
  padding: 20px 15px;
`;
const SearchBox = styled.View`
  width: 329px;
  height: 46px;
  background: #0d0d0d;
  opacity: 1;
  border-radius: 24px;
  flex-direction: row;
  flex: 8;
`;
const SearchBoxIcon = styled.Text`
  text-align: center;
  line-height: 40px;
  flex: 2;
`;
const SearchText = styled.Text`
  flex: 8;
  color: "rgba(255,255,255,1)";
  font-size: 20px;
  text-align: left;
  line-height: 40px;
`;
const SearchFilter = styled.Text`
  flex: 1;
  text-align: center;
  line-height: 40px;
`;
const SearchUserWrapper = styled.View`
  height: 130px;
`;
const SearchUser = styled.View`
  margin: 10px;
  position: relative;
`;
const SearchAvatar = styled.View``;
const SearchUserFollow = styled.View`
  width: 24px;
  height: 24px;
  background: #15be80;
  border-radius: 12px;
  opacity: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
const SearchResultWrapper = styled.View`
  flex: 1;
`;
const SearchResultTitle = styled.Text`
  font-size: 28px;
  font-family: Roboto;
  font-weight: bold;
  line-height: 60px;
  color: #ffffff;
  margin-left: 10px;
`;
const SearchResult = styled.View``;
