import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const Profil = () => {
  const [titleText, setTitleText] = useState("Profil");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Profil");
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
    fontFamily: "Cochin",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Profil;
