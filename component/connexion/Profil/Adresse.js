import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image, Platform, ScrollView, SafeAreaView } from 'react-native';

export default function Adresses(props) {

    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';

    const [showPass, setShowPass] = useState(false);
    const [text, setText] = useState(initialText);
    const [count, setCount] = useState(0);
    const onPress = () => {
        alert("Connexion")
    };

    const connexion = () => {
        props.navigation.navigate("Home")
    }

    const inscription = () => {
        props.navigation.navigate('Inscription')
    }
    const mdpOublier = () => {
        props.navigation.navigate('MotDePasseOublier')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View>
                    <Text style={{ marginLeft: "10%", marginTop: 30, fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>Adresses</Text>
                    <Text style={{ marginLeft: "5%", }}>Ajoutez ou modiez vos addresses ici.</Text>

                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Icon name='add' size={20} style={{ alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center' }}>Ajouter une adresse</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.button2}>
                        <View>
                            <Text style={{ marginBottom: 5, color: "#e07b7b" }}>Domicile de</Text>
                            <Text style={{ marginBottom: 30 }}>Kevin LUMWANGA</Text>
                            <Text style={{ marginBottom: 5 }}>25 rue Mirabeau</Text>
                            <Text style={{ marginBottom: 5 }}>29200 Brest</Text>
                            <Text>France</Text>
                        </View>
                        <TouchableOpacity>
                            <Icon name='pencil-sharp' size={40} />
                        </TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: "space-between",
        backgroundColor: "#D8D8D8",
        //justifyContent:'center',
    },
    top: {
        width: '90%',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 10,
        padding: Platform.OS == "ios" ? 16 : 8,
    },

    top2: {
        width: '70%',
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
        justifyContent: "center"
    },
    button: {
        borderWidth: 2,
        padding: 30,
        borderRadius: 3,
        borderColor: "#e07b7b",
        alignSelf: 'center',
        width: "90%",
        margin: 30,
        marginBottom: 20,
        marginTop: 30
    },
    button2: {
        borderWidth: 2,
        padding: 30,
        borderRadius: 3,
        borderColor: "#e07b7b",
        alignSelf: 'center',
        width: "90%",
        margin: 30,
        marginBottom: 20,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    eye: {
        position: 'absolute',
        top: 11,
        right: 37
    },

});