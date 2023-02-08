import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const MesVehicules = () => {
  const [titleText, setTitleText] = useState("Publier");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Publier [pressed]");
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
    fontFamily: Platform.OS == "ios" ? "Cochin" : "sans-serif",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default MesVehicules;