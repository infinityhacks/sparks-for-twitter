import React from "react";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
export default function TabBar({ state, descriptors, navigation, position }) {
  return (
    <TabWrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        });
        return (
          <Tab
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
          >
            <Animated.Text
              style={{
                opacity,
                textAlign: "center",
                fontSize: 18,
                color: "white",
              }}
            >
              {label}
            </Animated.Text>
            {state.index === index && <TextLine />}
          </Tab>
        );
      })}
    </TabWrapper>
  );
}

const TabWrapper = styled.View`
  flex: 5;
  flex-direction: row;
`;
const Tab = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
const TextLine = styled.View`
  height: 3px;
  background-color: "rgba(21, 190, 128, 1)";
  width: 50px;
  position: relative;
  top: 5px;
`;
