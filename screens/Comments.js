import React from "react";
import { Text, View } from "react-native";

export default function Me() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>코멘트 기능 화면</Text>
    </View>
  );
}
