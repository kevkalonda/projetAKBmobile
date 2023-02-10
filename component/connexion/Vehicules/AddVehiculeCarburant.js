import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity, TextInput, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import vehicule from "./BDDVehicule";
import Icon from 'react-native-vector-icons/Ionicons';

const AddVehiculeCarburant = (props) => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [kmh, setKmh] = useState(initialText);

  const [couleur, setCouleur] = useState(initialText);
  const [typeMoteur, setTypeMoteur] = useState("");
  const [reservoir, setReservoir] = useState("");
  const modele = props.route.params.marque;
  const nomMarque = props.route.params.nomMarque;
  const serie = props.route.params.serie;
  const idUser = props.route.params.id;

  const onPress = () => {

    if(kmh.length > 0 && couleur.length >0){
        props.navigation.navigate("AddVehiculeAvantDernier",{
            id: idUser,
            marque : modele, 
            nomMarque : nomMarque, 
            kmh: kmh, 
            couleur: couleur,
            reservoir: reservoir,
            typeMoteur:typeMoteur,
            serie: serie
    
        });
    }else{
        alert("Tous les chomps sont obligatoire");
    }
    
  };

  return (
    <SafeAreaView style={styles.container}>
          <ScrollView >
      <View  >
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize:25, marginTop:"10%", color: "#e07b7b" }}>Autre information</Text>
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15, }}>Marque {nomMarque} modele {modele}</Text>
              <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop:25, marginBottom:25 }}>
                  <View style={{ flexDirection: 'row', marginLeft:5 }}>
                      <Text style={{alignSelf:"center", fontWeight:"bold"}}>Couleur</Text>
                      <TextInput
                          editable
                          style={styles.input2}
                          inputAccessoryViewID={inputAccessoryViewID}
                          onChangeText={setCouleur}
                          value={couleur}
                          placeholder={'Couleur'}
                      />
                  </View>
                  <View style={{ flexDirection: 'row',  }}>
                      <Text style={{alignSelf:"center", fontWeight:"bold"}}>Kmh</Text>
                      <TextInput
                          editable
                          style={styles.input2}
                          inputAccessoryViewID={inputAccessoryViewID}
                          onChangeText={setKmh}
                          value={kmh}
                          keyboardType= {Platform.OS === "ios" ? "numeric" : "numeric" }
                          placeholder={'kmh'} />
                  </View>
              </View>
              <View>
                <Text style={{marginLeft:"10%", marginTop:10, fontWeight:"bold"}}>Reservoire : </Text>
                <Picker
                  selectedValue={reservoir}
                  style={{ height: 120, width: "90%", color: "black", alignSelf:"center", marginBottom:25 }}
                  onValueChange={(itemValue) => setReservoir(itemValue)}>
                    <Picker.Item label={"ESSENCE"} value={"ESSENCE"} />
                    <Picker.Item label={"DIESEL"} value={"DIESEL"} />
                </Picker>
              </View>
              <View>
                <Text style={{marginLeft:"10%", marginTop:25, fontWeight:"bold"}}>Type de moteur : </Text>
                <Picker
                  selectedValue={typeMoteur}
                  style={{ height: 200, width: "90%", color: "black", alignSelf:"center", marginBottom:"5%" }}
                  onValueChange={(itemValue) => setTypeMoteur(itemValue)}>
                    <Picker.Item label={"Combustion"} value={"Combustion"} />
                    <Picker.Item label={"Explosion"} value={"Explosion"} />
                    <Picker.Item label={"Electrique"} value={"Electrique"} />
                </Picker>
              </View>

              <TouchableOpacity style={styles.button}
                onPress={onPress}>
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
          
      </View>
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  top: {
      width: '90%',
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 3,
      marginTop: 10,
      padding: Platform.OS == "ios" ? 16 : 8,
  },
  input2: {
      width: '35%',
      backgroundColor: "white",
      borderColor:"#e07b7b",
      borderWidth: 1,
      borderRadius: 3,
      marginTop: 10,
      padding: Platform.OS == "ios" ? 16 : 8,
      marginRight: 20,
      marginLeft: 20,
  },
  textButton: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center"
  },
  button: {
      width: '90%',
      padding: 15,
      marginTop: 5,
      marginBottom: 5,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#e07b7b',
      alignSelf:"center",
      backgroundColor: '#e07b7b',
      textAlign: "center",
  },


});
export default AddVehiculeCarburant;
