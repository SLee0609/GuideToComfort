import React from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Unorderedlist from "react-native-unordered-list";

import { DefaultText, normalize } from "../../components/DefaultText";
import Colors from "../../constants/Colors";

const DepressionScreen = (props) => {
  return (
    <ScrollView style={styles.screen} bounces={false}>
      <View
        style={{
          width: Dimensions.get("window").width,
          height: (Dimensions.get("window").width * 810) / 1440,
        }}
      >
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          resizeMode={"cover"}
          source={require("../../assets/informationImages/depression.jpg")}
        />
      </View>
      <View style={styles.textContainer}>
        <DefaultText style={styles.heading}>{"Overview"}</DefaultText>
        <DefaultText style={styles.body}>
          {
            "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living."
          }
        </DefaultText>
        <DefaultText style={styles.body}>
          {
            "More than just a bout of the blues, depression isn't a weakness and you can't simply \"snap out\" of it. Depression may require long-term treatment. But don't get discouraged. Most people with depression feel better with medication, psychotherapy or both."
          }
        </DefaultText>
        <DefaultText style={styles.heading}>{"Symptoms"}</DefaultText>
        <DefaultText style={styles.body}>
          {
            "Although depression may occur only once during your life, people typically have multiple episodes. During these episodes, symptoms occur most of the day, nearly every day and may include:"
          }
        </DefaultText>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {"Feelings of sadness, tearfulness, emptiness or hopelessness"}
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Angry outbursts, irritability or frustration, even over small matters"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Loss of interest or pleasure in most or all normal activities, such as hobbies or sports"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {"Sleep disturbances, including insomnia or sleeping too much"}
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Tiredness and lack of energy, so even small tasks take extra effort"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Reduced appetite and weight loss or increased cravings for food and weight gain"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {"Anxiety, agitation or restlessness"}
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {"Slowed thinking, speaking or body movements"}
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Feelings of worthlessness or guilt, fixating on past failures or self-blame"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Trouble thinking, concentrating, making decisions and remembering things"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {
              "Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts or suicide"
            }
          </DefaultText>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <DefaultText style={styles.body}>
            {"Unexplained physical problems, such as back pain or headaches"}
          </DefaultText>
        </Unorderedlist>
        <DefaultText style={styles.body}>
          {
            "For many people with depression, symptoms usually are severe enough to cause noticeable problems in day-to-day activities, such as work, school, social activities or relationships with others. Some people may feel generally miserable or unhappy without really knowing why."
          }
        </DefaultText>
        <DefaultText style={styles.heading}>{"Causes"}</DefaultText>
        <DefaultText style={styles.body}>
          {
            "It's not known exactly what causes depression. As with many mental disorders, a variety of factors may be involved, such as:"
          }
        </DefaultText>
        <Unorderedlist style={styles.bullet}>
          <Text style={styles.body}>
            <DefaultText style={styles.bodyBold}>
              {"Biological differences."}
            </DefaultText>
            <DefaultText style={styles.body}>
              {
                " People with depression appear to have physical changes in their brains. The significance of these changes is still uncertain, but may eventually help pinpoint causes."
              }
            </DefaultText>
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <Text style={styles.body}>
            <DefaultText style={styles.bodyBold}>
              {"Brain chemistry."}
            </DefaultText>
            <DefaultText style={styles.body}>
              {
                " Neurotransmitters are naturally occurring brain chemicals that likely play a role in depression. Recent research indicates that changes in the function and effect of these neurotransmitters and how they interact with neurocircuits involved in maintaining mood stability may play a significant role in depression and its treatment."
              }
            </DefaultText>
          </Text>
        </Unorderedlist>
        <Unorderedlist style={styles.bullet}>
          <Text style={styles.body}>
            <DefaultText style={styles.bodyBold}>{"Hormones."}</DefaultText>
            <DefaultText style={styles.body}>
              {
                " Changes in the body's balance of hormones may be involved in causing or triggering depression. Hormone changes can result with pregnancy and during the weeks or months after delivery (postpartum) and from thyroid problems, menopause or a number of other conditions."
              }
            </DefaultText>
          </Text>
        </Unorderedlist>
      </View>
    </ScrollView>
  );
};

DepressionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Depression",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.logoLightBlue,
  },
  textContainer: {
    paddingHorizontal: normalize(15, "width"),
    paddingVertical: normalize(10, "height"),
  },
  heading: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    marginBottom: normalize(5, "height"),
  },
  body: {
    fontSize: 16,
    marginBottom: normalize(10, "height"),
  },
  bodyBold: {
    fontSize: 16,
    fontFamily: "open-sans-bold",
    marginBottom: normalize(10, "height"),
  },
  bullet: {
    fontSize: normalize(16, "width"),
  },
});

export default DepressionScreen;
