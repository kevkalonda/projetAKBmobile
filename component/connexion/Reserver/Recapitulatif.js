import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';
import {  View, TouchableOpacity,SafeAreaView, ScrollView, TextInput, StyleSheet, Image, Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';

const Recapitulatif = () => {
  const [titleText, setTitleText] = useState("Publier");
  const bodyText = "This is not really a bird nest.";
  const [checked, setChecked] = React.useState(false);

  const onPressTitle = () => {
    setTitleText("Publier [pressed]");
  };

  return (
      <View>
          <Text>Recaputilatif reservation</Text>
          <View>
              <Text>Nom Vehicule</Text>
              <Text>Model</Text>
              <Text>Marque</Text>

                <View>
                    <View>
                        <Text>Prise du vehicule</Text>
                        <Text>Date et heure</Text>
                    </View>
                    <View>
                        <Text>Retour du vehicule du vehicule</Text>
                        <Text>Date et heure</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>lieu du prise de vehicule</Text>
                        <Text>lieu du retour de vehicule</Text>
                    </View>
                </View>
                <View>
                    <Text>Assurance vehicule</Text>
                    <Text>Montant à payer</Text>
                    <Text>15000</Text>
                </View>
              <View>
                  <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                          setChecked(!checked);
                      }}
                  />
                  <Text>En cochant cette case vous accepter notre condition de confidentialité</Text>
              </View>
          </View>
      </View>
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

export default Recapitulatif;
