import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const SuicideScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>Suicide Screen</DefaultText>
    </View>
  );
};

SuicideScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Suicide",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SuicideScreen;
