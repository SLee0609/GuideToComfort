import React from "react";
import { View, StyleSheet } from "react-native";

import { DefaultText } from "../../components/DefaultText";

const AnxietyScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DefaultText>Anxiety Screen</DefaultText>
    </View>
  );
};

AnxietyScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Anxiety",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnxietyScreen;
