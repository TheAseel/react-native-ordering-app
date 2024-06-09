import React from "react";
import { View, Text } from "react-native";

const Splash = () => {
  return (
    <View>
      <Image
      source={require("../assets/Logo.png")}
      accessible={true}
      accessibilityLabel="Little Lemon Logo"
    />
    </View>
  );
};

export default Splash;
