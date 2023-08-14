import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const LossGriefScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>{"Loss & Grief Screen"}</DefaultText>
    </View>
  );
};

LossGriefScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Loss & Grief",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LossGriefScreen;
