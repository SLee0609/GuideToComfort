import React from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";

import InformationTile from "../components/InformationTile";
import Colors from "../constants/Colors";

const InformationScreen = (props) => {
  return (
    <ImageBackground
      resizeMode={"cover"}
      source={require("../assets/background1.jpg")}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.screenContent}
      >
        <View style={styles.tilePairs}>
          <InformationTile
            title={"Depression"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("Depression")}
          />
          <InformationTile
            title={"Anxiety"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("Anxiety")}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            title={"Social"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("Social")}
          />
          <InformationTile
            title={"Addiction"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("Addiction")}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            title={"Loss & Grief"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("LossGrief")}
          />
          <InformationTile
            title={"Gender & Sexuality"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("GenderSexuality")}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            title={"School"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("School")}
          />
          <InformationTile
            title={"Suicide"}
            color={Colors.logoGreen}
            onSelect={() => props.navigation.navigate("Suicide")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

InformationScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Information",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    alignItems: "center",
  },
  tilePairs: {
    flexDirection: "row",
  },
});

export default InformationScreen;
