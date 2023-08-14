import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const SocialScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>Social Screen</DefaultText>
    </View>
  );
};

SocialScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Social",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SocialScreen;
