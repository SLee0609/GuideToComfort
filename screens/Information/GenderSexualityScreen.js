import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const GenderSexualityScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>{"Gender & Sexuality Screen"}</DefaultText>
    </View>
  );
};

GenderSexualityScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Gender & Sexuality",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GenderSexualityScreen;
