import { Picker } from "@react-native-picker/picker";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Inscription(props) {
    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';
    const [Enable, setEnable] = useState("Madame");
    const [nom, setNom] = useState(initialText);
    const [prenom, setPrenom] = useState(initialText);
    const [mail, setMail] = useState(initialText);
    const [mdp2, setMdp2] = useState(initialText);
    const [mdp1, setMdp1] = useState(initialText);
    const onPress = () => {
        if(nom.length > 0 && prenom.length >0 && mail.length > 0 && mdp2.length >0 && mdp1.length >0){
            if(mdp2 === mdp1){
                const data = {
                    "idcpt": null,
                    "mailcpt": mail,
                    "photoprofilcpt": "",
                    "motdepassecpt": mdp1,
                    "user": {
                        "idusr": null,
                        "nomusr": nom,
                        "prenomusr": prenom,
                        "datenaissance": "",
                        "adresseusr": "",
                        "codepostaleusr": "",
                        "pieceidentiteusr": "",
                        "sexeusr": Enable
                    }
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
                fetch('http://192.168.90.152:8083/inscriptionUtilisateur', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if (data.statutTO === "Inscription effectué") {
                            props.navigation.navigate('Home')
                            //alert("inscription reussi");
                        } else {
                            alert(data.commentaireTO);
                        }
                    });
            }else{
                alert("Les deux mot de passe ne sont pas identique")
            }
        }else{
            alert("Tous les champs sont obligatoires")
        }
    };

    const retourConexion = () => {
        props.navigation.navigate('Connexion')
    }

    return (
        <View style={styles.container}>
            <Image style={{ marginTop: 5, width: Platform.OS == "ios" ? 200 : 150, height: Platform.OS == "ios" ? 200 : 150 }} source={require('../assets/AKB_menu.png')} />
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={{color: "white",alignSelf:"center", fontSize:15, marginLeft:10 }}>Civilité</Text>
                <Picker
                    selectedValue={Enable}
                    style={{ height: 200, width: 350, color: "white" }}
                    onValueChange={(itemValue) => setEnable(itemValue)}>
                    <Picker.Item label="Madame" value="F" />
                    <Picker.Item label="Monsieur" value="M" />
                </Picker>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <TextInput
                    style={styles.input2}
                    inputAccessoryViewID={inputAccessoryViewID}
                    onChangeText={setNom}
                    value={nom}
                    placeholder={'Nom'}
                />
                <TextInput
                    style={styles.input2}
                    inputAccessoryViewID={inputAccessoryViewID}
                    onChangeText={setPrenom}
                    value={prenom}
                    placeholder={'Prenom'}
                />
            </View>

            <TextInput
                style={styles.top}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setMail}
                value={mail}
                placeholder={'mail'}
            />
            <TextInput
                style={styles.top}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setMdp1}
                value={mdp1}
                secureTextEntry={true}
                placeholder={'Mot de passe'}
            />
            <TextInput
                style={styles.top}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setMdp2}
                value={mdp2}
                secureTextEntry={true}
                placeholder={'Confirmation mot de passe'}
            />
            <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>S'inscrire</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 25, alignItems: 'center', }}>
                <View style={{ marginTop: 30, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: "white" }}>Tu as déjà un compte ? </Text>
                    <TouchableOpacity
                        onPress={retourConexion} >
                        <Text style={{ fontSize: 20, color: "#676767", fontWeight: "bold" }}> se connecter</Text>
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
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#e07b7b",
        justifyContent: 'center',
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
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e07b7b',
        backgroundColor: '#676767',
        textAlign: "center",
    },


});