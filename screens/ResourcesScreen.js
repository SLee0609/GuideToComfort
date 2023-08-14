import React, { useState } from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import * as WebBrowser from "expo-web-browser";

import InformationTile from "../components/InformationTile";
import ResourceModal from "../components/ResourceModal";
import Colors from "../constants/Colors";

const ResourcesScreen = (props) => {
  const [showCrisisModal, setShowCrisisModal] = useState(false);
  const [showSuicideModal, setShowSuicideModal] = useState(false);
  const [showNEDAModal, setShowNEDAModal] = useState(false);
  const [showTrevorModal, setShowTrevorModal] = useState(false);
  const [showRAINNModal, setShowRAINNModal] = useState(false);
  const [showSteveModal, setShowSteveModal] = useState(false);
  const [showActiveModal, setShowActiveModal] = useState(false);
  const [showCaronModal, setShowCaronModal] = useState(false);

  const openWeb = (url) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <ImageBackground
      style={styles.screen}
      resizeMode={"cover"}
      source={require("../assets/background2.jpg")}
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.screenContent}
      >
        <View style={styles.tilePairs}>
          <InformationTile
            image={require("../assets/resourcesImages/crisisTextLine.jpg")}
            onSelect={() => setShowCrisisModal(true)}
          />
          <InformationTile
            image={require("../assets/resourcesImages/nationalSuicidePreventionLifeline.jpg")}
            onSelect={() => setShowSuicideModal(true)}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            image={require("../assets/resourcesImages/nationalEatingDisordersAssociation.jpg")}
            onSelect={() => setShowNEDAModal(true)}
          />
          <InformationTile
            image={require("../assets/resourcesImages/theTrevorProject.jpg")}
            onSelect={() => setShowTrevorModal(true)}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            image={require("../assets/resourcesImages/nationalSexualAssaultHotline.jpg")}
            onSelect={() => setShowRAINNModal(true)}
          />
          <InformationTile
            image={require("../assets/resourcesImages/theSteveFund.jpg")}
            onSelect={() => setShowSteveModal(true)}
          />
        </View>
        <View style={styles.tilePairs}>
          <InformationTile
            image={require("../assets/resourcesImages/activeMinds.png")}
            onSelect={() => setShowActiveModal(true)}
          />
          <InformationTile
            image={require("../assets/resourcesImages/caron.jpg")}
            onSelect={() => setShowCaronModal(true)}
          />
        </View>
        <ResourceModal
          showModal={showCrisisModal}
          title={"Crisis Text Line"}
          description={
            "Crisis Text Line provides free, 24/7, high-quality text-based mental health support and crisis intervention by empowering a community of trained volunteers to support people in their moments of need."
          }
          onCancel={() => setShowCrisisModal(false)}
          onGo={() => openWeb("https://www.crisistextline.org")}
        />
        <ResourceModal
          showModal={showSuicideModal}
          title={"National Suicide Prevention Lifeline"}
          description={
            "The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week and is committed to improving crisis services and advancing suicide prevention."
          }
          onCancel={() => setShowSuicideModal(false)}
          onGo={() => openWeb("https://suicidepreventionlifeline.org")}
        />
        <ResourceModal
          showModal={showNEDAModal}
          title={"National Eating Disorders Association"}
          description={
            "The National Eating Disorders Association (NEDA) is the largest nonprofit organization dedicated to supporting individuals and families affected by eating disorders. NEDA supports individuals and families affected by eating disorders, and serves as a catalyst for prevention, cures and access to quality care."
          }
          onCancel={() => setShowNEDAModal(false)}
          onGo={() => openWeb("https://www.nationaleatingdisorders.org")}
        />
        <ResourceModal
          showModal={showTrevorModal}
          title={"The Trevor Project"}
          description={
            "The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning (LGBTQ) young people under 25."
          }
          onCancel={() => setShowTrevorModal(false)}
          onGo={() => openWeb("https://www.thetrevorproject.org/get-help-now/")}
        />
        <ResourceModal
          showModal={showRAINNModal}
          title={"RAINN National Sexual Assault Hotline"}
          description={
            "RAINN, the nation's largest anti-sexual violence organization, created and operates the National Sexual Assault Hotline in partnership with more than 1,000 local sexual assault service providers across the country and carries out programs to prevent sexual violence and help survivors."
          }
          onCancel={() => setShowRAINNModal(false)}
          onGo={() => openWeb("https://hotline.rainn.org")}
        />
        <ResourceModal
          showModal={showSteveModal}
          title={"The Steve Fund"}
          description={
            "The Steve Fund is the nation’s leading organization focused on supporting the mental health and emotional well-being of young people of color.  The Steve Fund works with colleges and universities, non-profits, researchers, mental health experts, families, and young people to promote programs that build understanding and assistance for the mental and emotional health of the nation’s young people of color."
          }
          onCancel={() => setShowSteveModal(false)}
          onGo={() => openWeb("https://www.stevefund.org/crisistextline")}
        />
        <ResourceModal
          showModal={showActiveModal}
          title={"Active Minds"}
          description={
            "Founded by Alison Malmon when she was a junior at the University of Pennsylvania following the suicide of her older brother, Active Minds is a national leader for young adult mental health advocacy and suicide prevention. Active Minds brings to mental health what no other organization can — the voice of young people who are disproportionately affected by mental illnesses."
          }
          onCancel={() => setShowActiveModal(false)}
          onGo={() => openWeb("https://www.activeminds.org")}
        />
        <ResourceModal
          showModal={showCaronModal}
          title={"Caron"}
          description={
            "Caron aims to transform lives impacted by addiction and substance use through proven, comprehensive, and personalized behavioral healthcare solutions. Caron’s interdisciplinary teams of experts deliver evidence-based, specialized treatment through signature and core programming with respect and compassion."
          }
          onCancel={() => setShowCaronModal(false)}
          onGo={() => openWeb("https://www.caron.org")}
        />
      </ScrollView>
    </ImageBackground>
  );
};

ResourcesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Resources",
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

export default ResourcesScreen;
