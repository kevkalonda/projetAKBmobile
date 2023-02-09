import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import vehicule from "./BDDVehicule";
import Icon from 'react-native-vector-icons/Ionicons';

const AddVehicule = (props) => {
  const initialText = '';
  const [mdp2, setMdp2] = useState(initialText);
  const [marque, setMarque] = useState();
 

  const bodyText = "This is not really a bird nest.";

  const ajoutMarque = (marque)=>{
    setMarque(marque)
    //console.log(marque)
  }

  const onPress = () => {
    let ret = etape1+1;
    props.navigationa.navigate("AddVehiculeMarque",{marque : marque});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
          
            <Text style={{alignSelf:"center", fontWeight:"bold", fontSize:25, marginTop:"25%", color:"#e07b7b" }}>Choisir la marque</Text>
              <View>
                <Text style={{marginLeft:"10%", marginTop:25}}>Nos marques : </Text>
                <Picker
                  selectedValue={marque}
                  style={{ height: 200, width: "90%", color: "black", alignSelf:"center", marginBottom:"10%" }}
                  onValueChange={(itemValue) => setMarque(marque)}>
                  {vehicule.marque.map((number) => 
                      <Picker.Item label={number.nomMarque} value={number} />
                    )
                  }
                  
                </Picker>
              </View>
              <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
          
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
export default AddVehicule;
