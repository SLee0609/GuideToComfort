import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import Colors from "../constants/Colors";
import { DefaultText, normalize } from "../components/DefaultText";
import { data, dateNums, addData } from "../data/data";
import MoodGraph from "../components/MoodGraph";
import Mood from "../models/mood";
import MOODTYPES from "../data/moodTypes";

const MoodTrackerScreen = (props) => {
  const [moodData, setMoodData] = useState(data);
  const [dateNumbers, setDateNumbers] = useState(dateNums);

  const [showModal, setShowModal] = useState(false);

  const add = async (mood) => {
    setShowModal(false);
    await addData(new Mood(mood, new Date(new Date().toDateString())));
    setMoodData([...data]);
    setDateNumbers([...dateNums]);
  };

  return (
    <ScrollView style={styles.screen}>
      <MoodGraph data={moodData} dateNums={dateNumbers} />
      <View>
        <DefaultText style={styles.message}>
          {"The Mood Tracker can help you discover patterns in your mood"}
        </DefaultText>
        <View style={styles.checkInContainer}>
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <DefaultText style={styles.checkInText}>Check In</DefaultText>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={showModal}>
        <View style={styles.modalContainer}>
          <DefaultText style={styles.questionText}>
            {"How are you feeling today?"}
          </DefaultText>
          <View
            style={{
              flexDirection: "row",
              marginBottom: normalize(10, "height"),
            }}
          >
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Amazing");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Amazing " + MOODTYPES["Amazing"]}
              </DefaultText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Happy");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Happy " + MOODTYPES["Happy"]}
              </DefaultText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Content");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Content " + MOODTYPES["Content"]}
              </DefaultText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: normalize(10, "height"),
            }}
          >
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Okay");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Okay " + MOODTYPES["Okay"]}
              </DefaultText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Unhappy");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Unhappy " + MOODTYPES["Unhappy"]}
              </DefaultText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: normalize(20, "height"),
            }}
          >
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Sad");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Sad " + MOODTYPES["Sad"]}
              </DefaultText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moodContainer}
              onPress={async () => {
                add("Angry");
              }}
            >
              <DefaultText style={styles.moodText}>
                {"Angry " + MOODTYPES["Angry"]}
              </DefaultText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
            }}
          >
            <DefaultText style={styles.cancelText}>{"Cancel"}</DefaultText>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

MoodTrackerScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Mood Tracker",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  message: {
    paddingTop: normalize(50, "height"),
    color: "gray",
    fontSize: 16,
    paddingHorizontal: normalize(35, "width"),
    textAlign: "center",
  },
  checkInContainer: {
    paddingHorizontal: normalize(25, "width"),
    marginTop: normalize(50, "height"),
  },
  checkInButton: {
    width: "100%",
    paddingVertical: normalize(10, "height"),
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalize(10, "width"),
  },
  checkInText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },
  modalContainer: {
    paddingVertical: normalize(20, "height"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderColor: Colors.green,
    borderWidth: normalize(1, "width"),
    borderRadius: normalize(15, "width"),
    backgroundColor: "black",
  },
  questionText: {
    fontSize: 18,
    color: "white",
    marginBottom: normalize(20, "height"),
  },
  cancelText: {
    marginHorizontal: normalize(6, "width"),
    marginVertical: normalize(3, "height"),
    fontSize: 16,
    textAlign: "center",
    color: "red",
  },
  moodContainer: {
    borderWidth: normalize(1, "width"),
    borderColor: Colors.green,
    marginHorizontal: normalize(5, "width"),
    borderRadius: normalize(5, "width"),
    paddingVertical: normalize(6, "height"),
    paddingHorizontal: normalize(10, "width"),
  },
  moodText: {
    color: Colors.green,
    textAlign: "center",
  },
});

export default MoodTrackerScreen;
