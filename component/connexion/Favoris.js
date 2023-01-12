import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const Favoris = () => {
  const [titleText, setTitleText] = useState("Favoris");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Favoris [pressed]");
  };

  return (
    <View>
      
      <Text>Favoris</Text>
    </View>
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

export default Favoris;