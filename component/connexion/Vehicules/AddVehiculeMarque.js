import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import vehicule from "./BDDVehicule";
import Icon from 'react-native-vector-icons/Ionicons';

const AddVehiculeMarque = (props) => {

  const [model, setModel] = useState("");
  const [serie, setSerie] = useState("");
  const modele = props.route.params.marque;
  const nomMarque = props.route.params.nomMarque;
  const idUser = props.route.params.id;
  const inputAccessoryViewID = 'uniqueID';




  const getAllModel=() =>{
    let m = vehicule.marque.filter(function (hero) {
        return hero.nomMarque === nomMarque;
    })
    return m;
  }

  const onPress = () => {
    if(serie.length>0){
        props.navigation.navigate("AddVehiculeCarburant",{
            id: idUser,
            marque : model, 
            nomMarque : nomMarque,
            serie : serie,
        });
    }else{
        alert("Le numéro de serie du vehicule est obligatoire");
    }
    
  };

  return (
      <SafeAreaView style={styles.container}>
          <ScrollView >
              <View>
                  <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize:25, marginTop:"25%", color: "#e07b7b" }}>Choisir le modele de la marque</Text>
                  <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15, }}>Marque {nomMarque}</Text>
                  <View>
                      <Text style={{ marginLeft: "10%", marginTop: 25 }}>Nos modèles : </Text>
                      <Picker
                          selectedValue={model}
                          style={{ height: 200, width: "90%", color: "white", alignSelf: "center", marginBottom: "10%" }}
                          onValueChange={(itemValue) => setModel(itemValue)}>
                          {getAllModel()[0].model.map((number) =>
                              <Picker.Item label={number} value={number} key={number}/>
                          )}
                      </Picker>
                  </View>
                  <View style={{marginBottom:10}}>
                      <Text style={{ marginLeft: "10%", marginTop: 25 }}>Serie : </Text>
                      <TextInput
                          editable
                          style={styles.top}
                          inputAccessoryViewID={inputAccessoryViewID}
                          onChangeText={setSerie}
                          value={serie}
                          placeholder={'Numéro série du vehicule'}
                      />
                  </View>
                  <TouchableOpacity style={styles.button} onPress={onPress}>
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
      alignSelf:"center",
      marginBottom:10,
      borderColor:"#e07b7b",
      padding: Platform.OS == "ios" ? 16 : 8,
  },
  input2: {
      width: '40%',
      backgroundColor: "white",
      borderWidth: 1,
      borderColor:"#e07b7b",
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
export default AddVehiculeMarque;
