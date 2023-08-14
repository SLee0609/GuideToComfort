import React, { useState, useRef, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text, Path, Defs, Stop, LinearGradient } from "react-native-svg";
import { AreaChart, Grid, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";

import { DefaultText, normalize } from "../components/DefaultText";
import Colors from "../constants/Colors";
import MOODNUM from "../data/moodNum";
import MOODTYPES from "../data/moodTypes";

const MoodGraph = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState(
    props.dateNums.length >= 9
      ? months[props.dateNums[props.dateNums.length - 5].getMonth()]
      : months[
          props.dateNums[Math.round(props.dateNums.length / 2 - 0.5)].getMonth()
        ]
  );
  const [year, setYear] = useState(
    props.dateNums.length >= 9
      ? props.dateNums[props.dateNums.length - 5].getFullYear()
      : props.dateNums[
          Math.round(props.dateNums.length / 2 - 0.5)
        ].getFullYear()
  );

  const [showButton, setShowButton] = useState(false);

  const [gridKey, setGridKey] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setGridKey(gridKey + 1);
    }, 200);
  }, [props.data]);

  const updateMonthYear = (pos) => {
    let index =
      Math.floor(pos / normalize(40, "width")) +
      (props.dateNums.length >= 9
        ? 4
        : Math.round(props.dateNums.length / 2 - 0.5));
    let center = props.dateNums[index];
    setMonth(months[center.getMonth()]);
    setYear(center.getFullYear());

    if (props.dateNums.length - index <= 5) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  const width = Math.max(
    (normalize(40, "width") *
      (props.data[props.data.length - 1].date.getTime() -
        props.data[0].date.getTime())) /
      (1000 * 3600 * 24),
    Dimensions.get("window").width
  );

  const Gradient = ({ index }) => (
    <Defs key={index}>
      <LinearGradient
        id={"gradient"}
        x1={"50%"}
        y1={"0%"}
        x2={"50%"}
        y2={"100%"}
      >
        <Stop offset={"0%"} stopColor={Colors.logoGreen} stopOpacity={0.9} />
        <Stop offset={"100%"} stopColor={Colors.logoBlue} stopOpacity={0.4} />
      </LinearGradient>
    </Defs>
  );

  const Line = ({ line }) => (
    <Path
      key={"line"}
      d={line}
      stroke={"white"}
      strokeWidth={normalize(2, "height")}
      fill={"none"}
    />
  );

  const Decorator = ({ x, y, data }) => {
    return data.map((value, index) =>
      value.sup ? null : (
        <Text
          key={index}
          style={{ fontSize: normalize(26, "width") }}
          y={y(MOODNUM[value.mood]) + normalize(10, "width")}
          x={x(value.date) + normalize(1, "width")}
          textAnchor="middle"
        >
          {MOODTYPES[value.mood]}
        </Text>
      )
    );
  };

  const scrollViewRef = useRef();

  return (
    <View>
      <View style={styles.monthYearContainer}>
        <DefaultText style={styles.monthYearText}>
          {month + " " + year}
        </DefaultText>
        {showButton ? (
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.todayButton}
              onPress={() =>
                scrollViewRef.current.scrollToEnd({ animated: true })
              }
            >
              <DefaultText style={styles.todayText}>{"Today"}</DefaultText>
              <AntDesign
                style={{ paddingHorizontal: normalize(5, "width") }}
                name="right"
                size={normalize(15, "width")}
                color={Colors.green}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.screen}
        horizontal={true}
        bounces={false}
        decelerationRate={"fast"}
        snapToInterval={normalize(40, "width") * 8}
        snapToAlignment={"center"}
        onMomentumScrollEnd={(e) =>
          updateMonthYear(e.nativeEvent.contentOffset.x)
        }
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: false })
        }
      >
        <View>
          <XAxis
            style={{
              paddingVertical: normalize(5, "height"),
            }}
            data={props.dateNums}
            scale={scale.scaleTime}
            xAccessor={({ item }) => item}
            formatLabel={(value) => value.getDate()}
            svg={{
              fontSize: normalize(15, "width"),
              stroke: Colors.green,
              fill: Colors.green,
              textAnchor: "middle",
            }}
            contentInset={{
              left: width / (props.dateNums.length + 1),
              right: width / (props.dateNums.length + 1),
            }}
          />
          <AreaChart
            style={{
              height: normalize(250, "height"),
              width: width,
            }}
            data={props.data}
            yMin={-4}
            yMax={4}
            yAccessor={({ item }) => MOODNUM[item.mood]}
            xAccessor={({ item }) => item.date}
            xScale={scale.scaleTime}
            curve={shape.curveMonotoneX}
            svg={{ fill: "url(#gradient)" }}
          >
            <Grid
              key={gridKey}
              svg={{
                stroke: "gray",
                strokeDasharray:
                  normalize(3, "width") + ", " + normalize(8, "width"),
              }}
            />
            <Grid
              direction={Grid.Direction.VERTICAL}
              svg={{
                stroke: "gray",
                strokeDasharray:
                  normalize(3, "width") + ", " + normalize(8, "width"),
              }}
            />
            <Line />
            <Decorator />
            <Gradient />
          </AreaChart>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
  },
  monthYearContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  monthYearText: {
    padding: normalize(10, "width"),
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },
  todayButton: {
    flexDirection: "row",
    height: normalize(30, "width"),
    marginRight: normalize(10, "width"),
    borderRadius: normalize(5, "width"),
    borderWidth: normalize(1, "width"),
    borderColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    paddingLeft: normalize(10, "width"),
    fontSize: 14,
    color: Colors.green,
  },
});

export default MoodGraph;
