import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Count from "./components/count";
import SetCount from "./components/setCount";
import CountContext from "./context/countContext";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CountContext.Provider value={{ value, setValue }}>
        <Count />
        <SetCount />
      </CountContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
