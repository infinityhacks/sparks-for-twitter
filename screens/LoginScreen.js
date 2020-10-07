import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import {
  SwipeImage1,
  SwipeImage2,
  SwipeImage3,
} from "../components/SwipeImage";

export default function LoginScreen(props) {
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
        <LoginButton
          onPress={() => {
            props.navigation.navigate("Root");
          }}
        >
          <LoginButtonText>Sign in</LoginButtonText>
        </LoginButton>
      </LoginWarpper>
    </Wrapper>
  );
}

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
const LoginButton = styled.TouchableOpacity`
  text-align: center;
  width: 124px;
  height: 44px;
  background: #15be80;
  opacity: 1;
  border-radius: 22px;
  margin-left: 15px;
`;
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
