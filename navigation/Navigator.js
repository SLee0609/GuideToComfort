import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { normalize } from "../components/DefaultText";
import InformationScreen from "../screens/InformationScreen";
import MoodTrackerScreen from "../screens/MoodTrackerScreen";
import ResourcesScreen from "../screens/ResourcesScreen";
import DepressionScreen from "../screens/Information/DepressionScreen";
import AnxietyScreen from "../screens/Information/AnxietyScreen";
import SocialScreen from "../screens/Information/SocialScreen";
import AddictionScreen from "../screens/Information/Addiction";
import LossGriefScreen from "../screens/Information/LossGriefScreen";
import GenderSexualityScreen from "../screens/Information/GenderSexualityScreen";
import SchoolScreen from "../screens/Information/School";
import SuicideScreen from "../screens/Information/SuicideScreen";
import Colors from "../constants/Colors";

// Default nav options for stack navigators
const defaultStackNavOptions = {
  headerTitleAlign: "center",
  headerStyle: {
    height: normalize(130, "height"),
  },
  headerBackground: () => (
    <LinearGradient
      colors={[Colors.logoBlue, Colors.logoGreen]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: normalize(30, "width"),
  },
  headerTintColor: "white",
  headerBackTitleVisible: false,
  cardStyle: { backgroundColor: "white" },
};

// Create stack navigators for each screen
const InformationNav = createStackNavigator(
  {
    Information: InformationScreen,
    Depression: DepressionScreen,
    Anxiety: AnxietyScreen,
    Social: SocialScreen,
    Addiction: AddictionScreen,
    LossGrief: LossGriefScreen,
    GenderSexuality: GenderSexualityScreen,
    School: SchoolScreen,
    Suicide: SuicideScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const MoodTrackerNav = createStackNavigator(
  {
    MoodTracker: MoodTrackerScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const ResourcesNav = createStackNavigator(
  {
    Resources: ResourcesScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Main app navigator is the bottom tab navigator with 3 icons
const Navigator = createBottomTabNavigator(
  {
    // Information: {
    //   screen: InformationNav,
    //   navigationOptions: {
    //     tabBarIcon: (tabInfo) => {
    //       return (
    //         <FontAwesome5
    //           name="brain"
    //           style={{
    //             height: normalize(25, "width"),
    //             width: normalize(25 * (9 / 8), "width"),
    //           }}
    //           size={normalize(25, "width")}
    //           color={tabInfo.tintColor}
    //         />
    //       );
    //     },
    //   },
    // },
    MoodTracker: {
      screen: MoodTrackerNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Entypo
              style={{
                height: normalize(25, "width"),
                width: normalize(25 * (60 / 63), "width"),
              }}
              name={"bar-graph"}
              size={normalize(25, "width")}
              color={"white"}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Resources: {
      screen: ResourcesNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome5
              style={{
                height: normalize(25, "width"),
                width: normalize(25 * (5 / 4), "width"),
              }}
              name="hands-helping"
              size={normalize(25, "width")}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    // initialRouteName: "Information",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "black",
        height: normalize(25, "width") + normalize(30, "height"),
        width: "100%",
      },
      activeTintColor: "white",
      keyboardHidesTabBar: true,
    },
  }
);

export default createAppContainer(Navigator);
