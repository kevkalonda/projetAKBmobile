import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Connexion(props) {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";

  const [compte, setCompte] = useState(initialText);
  const [mdp, setMdp] = useState(initialText);

  const onPress = () => {
    alert("Connexion");
  };

  const connexion = async () => {
    if (compte.length > 0 || mdp.length > 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: compte, mot_de_pass: mdp }),
      };

      fetch("http://172.20.10.12:8083/connexionUser", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.statutTO === "user") {
            props.navigation.navigate("Home", { id: data.mailcptTO });
          } else {
            alert("erreur connexion");
          }
        });
    } else {
      alert("Les deux champs sont obligatoires");
    }
  };

  const inscription = () => {
    props.navigation.navigate("Inscription");
  };
  const mdpOublier = () => {
    props.navigation.navigate("MotDePasseOublier");
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: Platform.OS == "ios" ? 350 : 200,
          width: Platform.OS == "ios" ? 350 : 200,
        }}
        source={require("../assets/AKB_menu.png")}
      />
      <TextInput
        editable
        style={styles.top}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={setCompte}
        value={compte}
        placeholder={"Entrez votre mail"}
      />

      <TextInput
        editable
        style={styles.top}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={setMdp}
        value={mdp}
        secureTextEntry={true}
        placeholder={"Entrez votre mot de passe"}
      />

      <TouchableOpacity style={styles.button} onPress={connexion}>
        <Text style={styles.textButton}>Connexion</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 25, alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "white" }}>
            Mot de passe oublier ? cliquez{" "}
          </Text>
          <TouchableOpacity class="hover:bg-sky-700" onPress={mdpOublier}>
            <Text style={{ color: "#676767", fontWeight: "bold" }}> ici</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <Text style={{ fontSize: 20, color: "white" }}>
            Tu n'as pas de compte ?{" "}
          </Text>
          <TouchableOpacity class="hover:bg-sky-700" onPress={inscription}>
            <Text
              style={{ fontSize: 20, color: "#676767", fontWeight: "bold" }}
            >
              {" "}
              S'inscrire
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e07b7b",
    justifyContent: "center",
  },
  top: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    padding: Platform.OS == "ios" ? 16 : 8,
  },

  top2: {
    width: "70%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 10,
    padding: 16,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e07b7b",
    backgroundColor: "#676767",
    textAlign: "center",
  },
  eye: {
    position: "absolute",
    top: 11,
    right: 37,
  },
});
