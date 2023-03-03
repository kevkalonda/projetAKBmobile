import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { URL_LOCAL_HOST, PORT } from "@env";

const RecapitulatifAddVehicul = (props) => {
  const idUser = props.route.params.id;
  const modele = props.route.params.marque;
  const nomMarque = props.route.params.nomMarque;
  const kmh = props.route.params.kmh;
  const couleur = props.route.params.couleur;
  const reservoir = props.route.params.reservoir;
  const typeMoteur = props.route.params.typeMoteur;
  const description = props.route.params.description;
  const boiteAvitesse = props.route.params.boiteAvitesse;
  const serie = props.route.params.serie;



  const onPress = () => {
    const data = {
      "idvcl": null,
      "marquevcl": nomMarque,
      "modelvcl": modele,
      "serievcl": serie,
      "typemoteurvcl": typeMoteur,
      "reservoirvcl": reservoir,
      "kmvcl": kmh,
      "couleurvcl": "Blanc",
      "descriptionvcl": "descriptionvcl",
      "boitevitessevcl": boiteAvitesse,
      "statutvcl": "libre",
      "datemiseligne": new Date(),
      "datedebutdisponibilite": "2023-02-28T20:42:24.000+00:00",
      "datefindisponibilite": "2026-01-25T20:42:24.000+00:00",
      "cautionvcl": Math.floor(Math.random() * 100) + 3000,
      "prixvcl": Math.floor(Math.random() * 100) + 10,
      "compte": null
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(URL_LOCAL_HOST + '/ajoutVehicule', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data !== null) {
          props.navigation.navigate("Vehicule", {
            id: idUser,
          });
        }
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ marginTop: 20, justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 25,
            color: "#e07b7b",
            marginTop: 15,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Recaputilatif du vehicule
        </Text>
        <View style={{ marginTop: 20 }}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 20 }}>
              Model :<Text style={{ color: "#e07b7b" }}>{modele}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Marque : <Text style={{ color: "#e07b7b" }}>{nomMarque}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Serie :<Text style={{ color: "#e07b7b" }}>{serie}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Type de moteur :
              <Text style={{ color: "#e07b7b" }}>{typeMoteur}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Resrvoir : <Text style={{ color: "#e07b7b" }}>{reservoir}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Kmh :<Text style={{ color: "#e07b7b" }}>{kmh}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Couleurvcl :<Text style={{ color: "#e07b7b" }}>{couleur}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Description :{" "}
              <Text style={{ color: "#e07b7b" }}> {description}</Text>
            </Text>
            <Text style={{ fontSize: 20 }}>
              Boitevitesse :{" "}
              <Text style={{ color: "#e07b7b" }}>{boiteAvitesse}</Text>
            </Text>
          </View>

          <View style={styles.btnCon}>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
              <Text style={styles.btnTxt}>Confirmer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "sans-serif",
  },
  btnCon: {
    height: 45,
    marginTop: 25,
    width: "90%",
    elevation: 1,
    backgroundColor: "#e07b7b",
    borderRadius: 3,
    alignSelf: "center",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    color: "white",
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  webViewCon: {
    position: "absolute",
    top: "10%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    zIndex: 25,
    elevation: 2,
  },
});

export default RecapitulatifAddVehicul;
