import React, { useContext } from "react";
import { Text, View } from "react-native";
import CountContext from "../context/countContext";

const Count = () => {
  const { value } = useContext(CountContext);
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default Count;
