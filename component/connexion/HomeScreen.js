import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [titleText, setTitleText] = useState("Home");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Home [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily:Platform.OS=="ios"? "Cochin":"sans-serif",
    justifyContent:"center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default HomeScreen;
