import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/Ionicons';

const AddVehiculeAvantDernier = (props) => {

  const [boiteAvitesse, setBoiteAvitesse] = useState("");
  const modele = props.route.params.marque;
  const nomMarque = props.route.params.nomMarque;
  const idUser = props.route.params.id;
  const serie = props.route.params.serie;

      
 const kmh=props.route.params.kmh;
 const couleur= props.route.params.couleur;
 const reservoir= props.route.params.reservoir;
 const typeMoteur= props.route.params.typeMoteur;

  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';

  const [description, setDescription] = useState('');

  const onPress = () => {
    props.navigation.navigate("RecapitulatifAddVehicul",{
        id: idUser,
        marque : modele, 
        nomMarque : nomMarque,
        kmh: kmh, 
        couleur: couleur,
        reservoir: reservoir,
        typeMoteur:typeMoteur,
        description : description,
        boiteAvitesse: boiteAvitesse,
        serie:serie
    });
  };

  return (
      <SafeAreaView style={styles.container}>
          <ScrollView >
              <View>
                  <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize:25, marginTop:"5%", color: "#e07b7b" }}>Choisir le modele de la marque</Text>
                  <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15, }}>Marque {nomMarque}</Text>
                  <Text style={{fontWeight:"bold", marginLeft:"10%", marginBottom:25, marginTop:25}}>Description</Text>
                  <TextInput
                      editable
                      multiline
                      style={styles.top}
                      inputAccessoryViewID={inputAccessoryViewID}
                      onChangeText={setDescription}
                      value={description}
                      placeholder={'Entrez le description du vehicule'}
                  />
                  <View>
                      <Text style={{ marginLeft: "10%", marginTop: 25 }}>Boite à vitesse : </Text>
                      <Picker
                          selectedValue={boiteAvitesse}
                          style={{ height: 200, width: "90%", color: "black", alignSelf: "center", marginBottom: "10%" }}
                          onValueChange={(itemValue) => setBoiteAvitesse(itemValue)}>
                          <Picker.Item label={"Manuelle"} value={"Manuelle"} />
                          <Picker.Item label={"Automatique"} value={"Automatique"} />
                          <Picker.Item label={"Séquentielle"} value={"Séquentielle"} />
                      </Picker>
                  </View>
                  <TouchableOpacity style={styles.button}
                      onPress={onPress}>
                      <Text style={styles.textButton}>Ajouter une image</Text>
                  </TouchableOpacity>

                  
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
      height: '20%',
      backgroundColor: "white",
      borderColor:"#e07b7b",
      borderWidth: 1,
      borderRadius: 3,
      marginTop: 10,
      alignSelf:"center",
      textAlign:"left",

      padding: Platform.OS == "ios" ? "1%" : "1%",

  },
  input2: {
      width: '40%',
      backgroundColor: "white",
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
export default AddVehiculeAvantDernier;
