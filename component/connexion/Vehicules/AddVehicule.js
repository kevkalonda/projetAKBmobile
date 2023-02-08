import React, { useState } from "react";
import { Text, StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddVehicule = () => {
  const [titleText, setTitleText] = useState("Publier");
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [mdp2, setMdp2] = useState(initialText);
  const [Enable, setEnable] = useState("");

  const [etape, setEtape] = useState(0);
  const bodyText = "This is not really a bird nest.";

  const onPress = () => {
    setEtape(1);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {
          etape===0 ?
          <View>
            <Text>Choisir la marque</Text>
              <View>
                <Text>Marque : </Text>
                <Picker
                  selectedValue={Enable}
                  style={{ height: 200, width: "80%", color: "white" }}
                  onValueChange={(itemValue) => setEnable(itemValue)}>
                  <Picker.Item label="Madame" value="F" />
                  <Picker.Item label="Monsieur" value="M" />
                </Picker>
              </View>
              <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
          </View>:
          etape===1 ?
          <View>
            <Text>Choisir la marque</Text>
              <View>
                <Text>Model : </Text>
                <Picker
                  selectedValue={Enable}
                  style={{ height: 200, width: "80%", color: "white" }}
                  onValueChange={(itemValue) => setEnable(itemValue)}>
                  <Picker.Item label="Madame" value="F" />
                  <Picker.Item label="Monsieur" value="M" />
                </Picker>
              </View>
              <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
          </View>:
          etape===2 ?
          <View>
            <Text>Marque</Text>
            <Text>Model</Text>
            <Text>Serie</Text>
            <TextInput
                style={styles.top}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setMdp2}
                value={mdp2}
                secureTextEntry={true}
                placeholder={'Serie'}
            />
            <View>
                <Text>Type de moteur : </Text>
                <Picker
                  selectedValue={Enable}
                  style={{ height: 200, width: "80%", color: "white" }}
                  onValueChange={(itemValue) => setEnable(itemValue)}>
                  <Picker.Item label="Madame" value="F" />
                  <Picker.Item label="Monsieur" value="M" />
                </Picker>
              </View>
              <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
          </View>:

                <View>

                  <Text>reservoirvcl</Text>
                  <Text>kmvcl</Text>
                  <Text>descriptionvcl</Text>
                  <Text>boitevitessevcl</Text>

                </View>

        }
        
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
      backgroundColor: '#676767',
      textAlign: "center",
  },


});
export default AddVehicule;
