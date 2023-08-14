import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

import { DefaultText, normalize } from "../components/DefaultText";

const InformationTile = (props) => {
  if (props.image != null) {
    return (
      <TouchableOpacity
        style={{
          ...styles.gridItem,
          ...{
            height:
              props.size == null
                ? normalize(150, "width")
                : normalize(props.size, "width"),
            width:
              props.size == null
                ? normalize(150, "width")
                : normalize(props.size, "width"),
          },
        }}
        onPress={props.onSelect}
      >
        <Image source={props.image} style={styles.image} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.gridItem,
        ...{
          height:
            props.size == null
              ? normalize(150, "width")
              : normalize(props.size, "width"),
          width:
            props.size == null
              ? normalize(150, "width")
              : normalize(props.size, "width"),
        },
      }}
      onPress={props.onSelect}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <DefaultText style={styles.title}>{props.title}</DefaultText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: normalize(15, "width"),
    borderRadius: normalize(10, "width"),
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: normalize(2, "height") },
    shadowRadius: normalize(10, "width"),
  },
  container: {
    flex: 1,
    borderRadius: normalize(10, "width"),
    padding: normalize(15, "width"),
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
  image: {
    borderRadius: normalize(10, "width"),
    height: "100%",
    width: "100%",
  },
});

export default InformationTile;
