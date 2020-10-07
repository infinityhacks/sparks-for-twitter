import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(75, 75, 75, 1)",
  },
  content: {
    flex: 1,
    padding: 32,
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1da1f2",
    paddingVertical: 16,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
});

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
