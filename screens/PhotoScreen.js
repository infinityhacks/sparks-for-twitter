import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Avatar, TouchableRipple } from "react-native-paper";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Dimensions, TouchableOpacity, Text, View } from "react-native";
import moment from "moment";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import _ from "underscore";

function PhotoScreen({ route, navigation, ...props }) {
  const [imageHeight, setImageHeight] = useState();
  Image.getSize(
    route.params.extended_entities.media[0].media_url_https,
    (width, height) => {
      setImageHeight((height / width) * Dimensions.get("window").width);
    }
  );
  const MediaCover = styled.Image`
    width: ${Dimensions.get("window").width}px;
    height: ${imageHeight}px;
  `;
  const SwiperWrapper = styled.View`
    width: ${Dimensions.get("window").width}px;
    height: ${imageHeight}px;
    position: absolute;
    top: ${Dimensions.get("window").height / 2 - imageHeight / 2}px;
  `;
  const renderSwiper = () => {
    return route.params.extended_entities.media.map((item, index) => {
      return (
        <MediaCover
          source={{ uri: item.media_url_https }}
          style={{}}
          key={index}
        />
      );
    });
  };

  const renderVerticalSwiper = () => {
    return props.homePhoto.map((item) => {
      return (
        <View key={item.id}>
          <CardHeaderWrapper>
            <CardHeader>
              <AvatarWrapper>
                <Avatar.Image
                  source={{
                    uri: item.user.profile_image_url_https,
                  }}
                  size={40}
                />
              </AvatarWrapper>
              <UserInfoWrapper>
                <UserNickname>{item.user.name}</UserNickname>
                <UserName>@{item.user.screen_name}</UserName>
              </UserInfoWrapper>
              <TweetTime>{moment(item.created_at).fromNow()}</TweetTime>
            </CardHeader>
            <TweetWrapper>{item.text}</TweetWrapper>
          </CardHeaderWrapper>
          {imageHeight && (
            <SwiperWrapper>
              <Swiper
                dot={<SwiperDot style={{ opacity: 0.5 }}></SwiperDot>}
                activeDot={<SwiperDot></SwiperDot>}
                loop={false}
                index={0}
              >
                {renderSwiper()}
              </Swiper>
            </SwiperWrapper>
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
        </View>
      );
    });
  };
  return (
    <CardWrapper>
      <Swiper
        loop={false}
        index={_.findIndex(props.homePhoto, { id: route.params.id })}
        horizontal={false}
        showsPagination={false}
      >
        {renderVerticalSwiper()}
      </Swiper>
    </CardWrapper>
  );
}
const mapStateToProps = (state) => {
  return { homePhoto: state.login.homePhoto };
};
const actionCreator = {};
export default connect(mapStateToProps, actionCreator)(PhotoScreen);
const CardWrapper = styled.View`
  flex: 1;
  background-color: "rgba(33, 33, 33, 1)";
  position: relative;
`;
const CardHeader = styled.View`
  flex-direction: row;
`;
const CardHeaderWrapper = styled.View`
  flex-direction: column;
  width: ${Dimensions.get("window").width}px;
  position: absolute;
  top: 10px;
  z-index: 10;
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
const CardFooterWrapper = styled.View`
  position: absolute;
  top: ${Dimensions.get("window").height - 70}px;
`;
const SwiperDot = styled.View`
  width: 9px;
  height: 9px;
  background: #fff9f9;
  border-radius: 4px;
  opacity: 1;
  margin: 3px;
`;
