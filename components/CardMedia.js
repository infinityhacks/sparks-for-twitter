import React from "react";
import styled from "styled-components";
import { View, Dimensions } from "react-native";
export default function CardMedia(props) {
  // console.log(props.media, 'props')
  if (props.media.length === 1) {
    return <FullScreen source={{ uri: props.media[0].media_url_https }} />;
  } else if (props.media.length === 2) {
    return (
      <View style={{ flexDirection: "row" }}>
        <HalfScreen source={{ uri: props.media[0].media_url_https }} />
        <HalfScreen source={{ uri: props.media[1].media_url_https }} />
      </View>
    );
  } else if (props.media.length === 3) {
    return (
      <View style={{ flexDirection: "row" }}>
        <HalfScreen source={{ uri: props.media[0].media_url_https }} />
        <View style={{ flexDirection: "column" }}>
          <QuaterScreen source={{ uri: props.media[1].media_url_https }} />
          <QuaterScreen source={{ uri: props.media[2].media_url_https }} />
        </View>
      </View>
    );
  } else if (props.media.length === 4) {
    return (
      <View style={{ flexDirection: "column" }}>
        <HalfScreenContainer>
          <QuaterScreen source={{ uri: props.media[0].media_url_https }} />
          <QuaterScreen source={{ uri: props.media[1].media_url_https }} />
        </HalfScreenContainer>
        <HalfScreenContainer>
          <QuaterScreen source={{ uri: props.media[2].media_url_https }} />
          <QuaterScreen source={{ uri: props.media[3].media_url_https }} />
        </HalfScreenContainer>
      </View>
    );
  } else {
    return <ImageWarning>Fetch Image Failed</ImageWarning>;
  }
}
const FullScreen = styled.Image`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;
const HalfScreen = styled.Image`
  flex: 1;
  width: ${Dimensions.get("window").width / 2}px;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;
const HalfScreenContainer = styled.View`
  flex-direction: row;
  width: ${Dimensions.get("window").width}px;
  height: 125px;
  align-items: center;
  justify-content: space-between;
  margin: 2px;
`;
const QuaterScreen = styled.Image`
  width: ${Dimensions.get("window").width / 2}px;
  height: 125px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;
const ImageWarning = styled.Text`
  color: "rgba(255,255,255,1)";
`;
