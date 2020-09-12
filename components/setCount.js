import React, { useContext } from "react";
import { View, TextInput } from "react-native";
import CountContext from "../context/countContext";

const SetCount = () => {
  const { value, setValue } = useContext(CountContext);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 180,
      }}
    >
      <TextInput
        placeholder="Escreva aqui"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default SetCount;
