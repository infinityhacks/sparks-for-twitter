import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import {
  SwipeImage1,
  SwipeImage2,
  SwipeImage3,
} from "../components/SwipeImage";
import twitter, { TWLoginButton } from "react-native-simple-twitter";
import { AsyncStorage } from "react-native";
import { TWITTER_API_KEY, TWITTER_API_SECRET_KEY } from "../variables";
import { connect } from "react-redux";
import {
  setUserInfo,
  setHomeTimeLine,
  setHomePhoto,
  setHomeVideo,
} from "../store/actions";
import _ from "underscore";

function LoginScreen(props) {
  const onGetAccessToken = async ({ oauth_token, oauth_token_secret }) => {
    await AsyncStorage.setItem(
      "user_token",
      JSON.stringify({ token: oauth_token, tokenSecret: oauth_token_secret })
    );
    props.navigation.replace("Root");
  };

  const onSuccess = async (user) => {
    try {
      await AsyncStorage.setItem("user_info", JSON.stringify({ ...user }));
      props.setUserInfo(user);
    } catch (err) {
      console.log(err);
    }
  };

  const onPress = (e) => {
    console.log("button pressed");
  };

  const onClose = (e) => {
    console.log("press close button");
  };

  const onError = (err) => {
    console.log(err, "err");
  };

  useEffect(() => {
    /* check AsyncStorage */
    AsyncStorage.getItem("user_token").then((userToken) => {
      if (userToken !== null) {
        const user_token = JSON.parse(userToken);
        twitter.setAccessToken(user_token.token, user_token.tokenSecret);
        twitter
          .get("account/verify_credentials.json", {
            include_entities: false,
            skip_status: true,
            include_email: true,
          })
          .then((response) => {
            props.navigation.replace("Root");
          })
          .catch((err) => console.log(err, "err5"));
        twitter
          .get("statuses/home_timeline.json", {
            include_entities: false,
            count: 10,
            exclude_replies: true,
          })
          .then((response) => {
            // console.log(JSON.stringify(response), "response");
            props.setHomeTimeLine(response);
            props.setHomeVideo(
              _.uniq(
                [
                  ..._.filter(response, function (item) {
                    return (
                      item.extended_entities &&
                      item.extended_entities.media[0].type === "video"
                    );
                  }),
                  ..._.filter(response, function (item) {
                    return (
                      item.retweeted_status &&
                      item.retweeted_status.extended_entities &&
                      item.retweeted_status.extended_entities.media[0].type ===
                        "video"
                    );
                  }),
                ],
                "id"
              )
            );
            props.setHomePhoto(
              _.uniq(
                [
                  ..._.filter(response, function (item) {
                    return (
                      item.extended_entities &&
                      item.extended_entities.media[0].type === "photo"
                    );
                  }),
                  ..._.filter(response, function (item) {
                    return (
                      item.retweeted_status &&
                      item.retweeted_status.extended_entities &&
                      item.retweeted_status.extended_entities.media[0].type ===
                        "photo"
                    );
                  }),
                ],
                "id"
              )
            );
          })
          .catch((err) => console.log(err, "err5"));
      }
    });
  }, []);

  useEffect(() => {
    twitter.setConsumerKey(TWITTER_API_KEY, TWITTER_API_SECRET_KEY);

    AsyncStorage.getItem("user_info").then((res) => {
      if (!res) {
        props.setUserInfo(JSON.parse(res));
      }
    });
  }, []);
  return (
    <Wrapper>
      <SwiperWrapper>
        <Swiper
          dot={<SwiperDot style={{ opacity: 0.5 }}></SwiperDot>}
          activeDot={<SwiperDot></SwiperDot>}
          loop={false}
          index={0}
        >
          <SwiperItem>
            <SwipeImage1 style={{ margin: 30 }} />
            <SwiperSubtitle>
              Browse your favorite tweets with a breath
            </SwiperSubtitle>
          </SwiperItem>
          <SwiperItem>
            <SwipeImage2 style={{ margin: 30 }} />
            <SwiperSubtitle>
              Browse your favorite tweets with a breath
            </SwiperSubtitle>
          </SwiperItem>
          <SwiperItem>
            <SwipeImage3 style={{ margin: 30 }} />
            <SwiperSubtitle>
              Browse your favorite tweets with a breath
            </SwiperSubtitle>
          </SwiperItem>
        </Swiper>
      </SwiperWrapper>
      <WelcomeMessage>
        <WelcomeTitle>Welcome to the Sparks</WelcomeTitle>
        <WelcomeSubtitle>A third party client for twitter</WelcomeSubtitle>
      </WelcomeMessage>
      <LoginWarpper>
        <LoginIntro>Let's sign you in</LoginIntro>
        <TWLoginButton
          style={{
            textAlign: "center",
            width: 124,
            height: 44,
            backgroundColor: "rgba(21, 190, 128, 1)",
            opacity: 1,
            borderRadius: 22,
            marginLeft: 15,
          }}
          type="TouchableOpacity"
          onPress={onPress}
          onGetAccessToken={onGetAccessToken}
          onSuccess={onSuccess}
          onClose={onClose}
          onError={onError}
          closeText="Close"
        >
          <LoginButtonText>Sign in</LoginButtonText>
        </TWLoginButton>
        {
          //   <LoginButton
          //   onPress={() => {
          //     console.log('beforeLogin')
          //     onLoginPress()
          //     // props.navigation.navigate("Root");
          //   }}
          // >
          //   <LoginButtonText>Sign in</LoginButtonText>
          // </LoginButton>
        }
      </LoginWarpper>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const actionCreator = {
  setUserInfo,
  setHomeTimeLine,
  setHomePhoto,
  setHomeVideo,
};
export default connect(mapStateToProps, actionCreator)(LoginScreen);
const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: "rgba(33, 33, 33, 1)";
  flex-direction: column;
`;
const SwiperWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const SwiperItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const SwiperSubtitle = styled.Text`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 21px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 40px;
  margin-top: -10px;
`;
const SwiperDot = styled.View`
  width: 9px;
  height: 9px;
  background: #fff9f9;
  border-radius: 4px;
  opacity: 1;
  margin: 3px;
`;
const WelcomeMessage = styled.View`
  text-align: center;
  margin-bottom: 60px;
`;
const WelcomeTitle = styled.Text`
  text-align: center;
  font-size: 30px;
  font-family: Roboto-Medium;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 10px;
`;
const WelcomeSubtitle = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;
  opacity: 0.47;
`;
const LoginWarpper = styled.View`
  flex: 1;
  text-align: center;
`;
const LoginButton = styled.TouchableOpacity``;
const LoginButtonText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-family: Roboto-Medium;
  font-weight: 400;
  line-height: 40px;
  color: #ffffff;
  opacity: 1;
`;
const LoginIntro = styled.Text`
  font-size: 21px;
  font-family: Roboto-Medium;
  font-weight: 500;
  line-height: 28px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 20px;
`;
