import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const [titleText, setTitleText] = useState("Home");
  const bodyText = "This is not really a bird nest.";

  const pleinArendrePlein = () => {
    alert("Le carburant est à votre charge" +
      " et vous devrez restituer le véhicule " +
      "avec le niveau de carburant initial. " +
      "Si vous ne pouviez pas la rendre " +
      "avec le même niveau, des frais " +
      "supplémentaires de 20 € " +
      "s'appliqueront en plus du prix " +
      "du carburant.")
  };

  const numbers = ['vehicule1.jpg', "vehicule2.jpg", "vehicule3.jpg", "vehicule4.jpg", "vehicule5.jpg",
    "vehicule6.jpg", "vehicule7.jpg", "vehicule8.jpg", "vehicule10.jpg", "vehicule9.jpg"];
  var ico = "vehicule4.jpg";
  const getUrl = (number) => require('../../assets/' + ico);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {numbers.map((number) =>
          <View style={styles.container2} key={number}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginBottom: 3, color: "#e07b7b", fontWeight: "bold", fontSize: 15 }}>RENAULT TWINGO</Text>

                </View>
                <Text style={{ marginBottom: 10, fontStyle: "italic", fontSize: 15 }}>Mini-Eco {number}</Text>
                <TouchableOpacity>
                  <Image source={getUrl({ number })} style={{ width: 190, height: 130, marginBottom: 15 }} />
                </TouchableOpacity>
                <Text>Prix : 20€ /Kmh</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ alignSelf: "center", fontWeight: "bold" }}>Reserver</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 30 }}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Icon name="car-sport" size={20} />
                  <Text style={{ marginLeft: 10, marginTop: 2 }}>Boite Manuelle</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row" }}>
                    <IconCom name="car-door" size={20} />
                    <Text style={{ marginLeft: 4, marginTop: 2, fontSize: 12 }}>3 portes</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <IconFont name="user" size={20} />
                    <Text style={{ marginLeft: 4, marginTop: 2, fontSize: 12 }}>4 places</Text>
                  </View>
                </View>
                <Text>.................................</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <IconCom name='gas-station' size={25} />
                  <View>
                    <Text style={{ fontSize: 12, color: "#e07b7b" }}>Politique de carburant</Text>
                    <TouchableOpacity onPress={pleinArendrePlein}>
                      <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>Plein à rendre plein</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text>..................................</Text>
                <View style={{ marginTop: 10 }}>
                  <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                    <Text style={{ marginLeft: 2 }}>Responsabilité civile</Text>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                    <Text style={{ marginLeft: 2 }}>Assurance tous risques</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                    <Text style={{ marginLeft: 2 }}>Annulation gratuite</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <TouchableOpacity>
                    <Icon name="information-circle-outline" size={40} style={{ marginTop: 25 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="arrow-redo-sharp" size={40} style={{ marginTop: 25 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="heart-outline" size={40} style={{ marginTop: 25 }} />
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "sans-serif",
    backgroundColor: "#D8D8D8",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: "space-between",
    backgroundColor: "#D8D8D8",
    //justifyContent:'center',
  },
  container2: {
    backgroundColor: "#b2b2b2",
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#e07b7b",
    borderColor: '#b2b2b2',
    margin: 10
  }
});

export default HomeScreen;
