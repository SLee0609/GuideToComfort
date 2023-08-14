import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const AddictionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>Addiction Screen</DefaultText>
    </View>
  );
};

AddictionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Addiction",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddictionScreen;
