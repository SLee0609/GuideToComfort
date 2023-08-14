import React from "react";
import { Text, StyleSheet, Dimensions, PixelRatio } from "react-native";

// Accepts a string and returns a text component in open-sans font
const DefaultText = (props) => {
  let fontStyle = { ...styles.text, ...props.style };
  fontStyle.fontSize = normalize(fontStyle.fontSize, "width");

  return (
    <Text onPress={props.onPress} style={fontStyle}>
      {props.children}
    </Text>
  );
};

// normalizes numeric values using ratios of either width or height (375 and 812 is the width and height of iPhone X, the device used for testing)
const normalize = (size, side) => {
  let scale;
  if (side === "width") {
    scale = Dimensions.get("window").width / 375;
  } else if (side === "height") {
    scale = Dimensions.get("window").height / 812;
  }
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: 14,
  },
});

export { DefaultText, normalize };
