import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./navigation";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { AppLoading } from "expo";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
          <StatusBar backgroundColor="rgba(33, 33, 33, 1)" style="light" />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
