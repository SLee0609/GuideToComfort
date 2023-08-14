import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const SchoolScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>School Screen</DefaultText>
    </View>
  );
};

SchoolScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "School",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SchoolScreen;
