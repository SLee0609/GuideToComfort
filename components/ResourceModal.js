import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { DefaultText, normalize } from "../components/DefaultText";
import Colors from "../constants/Colors";

const ResourceModal = (props) => {
  return (
    <Modal isVisible={props.showModal}>
      <View style={styles.modalContainer}>
        <DefaultText style={styles.title}>{props.title}</DefaultText>
        <DefaultText style={styles.description}>
          {props.description}
        </DefaultText>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={props.onGo}>
            <DefaultText style={styles.visitText}>
              {"Visit Website"}
            </DefaultText>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onCancel}>
            <DefaultText style={styles.cancelText}>{"Cancel"}</DefaultText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: normalize(20, "height"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "black",
    borderWidth: normalize(1, "width"),
    borderRadius: normalize(15, "width"),
    backgroundColor: "black",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: normalize(25, "width"),
    fontFamily: "open-sans-bold",
    color: Colors.green,
    marginBottom: normalize(10, "height"),
  },
  description: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginHorizontal: normalize(25, "width"),
    marginBottom: normalize(20, "height"),
  },
  visitText: {
    marginHorizontal: normalize(15, "width"),
    marginVertical: normalize(3, "height"),
    fontSize: 18,
    textAlign: "center",
    color: Colors.blue,
  },
  cancelText: {
    marginHorizontal: normalize(15, "width"),
    marginVertical: normalize(3, "height"),
    fontSize: 18,
    textAlign: "center",
    color: "red",
  },
});

export default ResourceModal;
