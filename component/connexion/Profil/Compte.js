import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image, Platform, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Compte(props) {

    const updateNumero = () => {
        alert("modification")
        //props.navigation.navigate('MotDePasseOublier')
    }

    const deleteCompte = () => {
        alert("suppression du compte")
        //props.navigation.navigate('MotDePasseOublier')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View>
                    <Icon name='person-circle-outline' size={200} style={{ alignSelf: "center", marginTop: 10, marginBottom: 25 }} />
                    <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 40 }}>Kevin LUMWANGA</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ marginLeft: 50 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ marginBottom: 5, color: '#e07b7b' }}>Numéro de téléphone</Text>
                                <Text>0621211744</Text>
                            </View>
                            <View>
                                <Text style={{ marginBottom: 5, color: '#e07b7b' }}>Numéro client</Text>
                                <Text>0621211744</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginRight: "20%" }} onPress={updateNumero} >
                            <Icon name='pencil-sharp' size={40} />
                        </TouchableOpacity>
                    </View>
                    <Image style={{ tintColor: "#BDBDBD", marginLeft: "10%", marginBottom: 20, marginTop: 18, height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../../assets/Capture.png')} />

                    <Icon name="mail" size={40} style={{ marginLeft: "10%", marginBottom: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ marginLeft: 50 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ marginBottom: 5, color: '#e07b7b' }}>Adresse e-mail</Text>
                                <Text>kevinlumwanga7@gmail.com</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginRight: "20%" }} onPress={updateNumero} >
                            <Icon name='pencil-sharp' size={40} />
                        </TouchableOpacity>
                    </View>
                    <Image style={{ marginLeft: "10%", marginBottom: 20, marginTop: 18, tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../../assets/Capture.png')} />
                    <Icon name="lock-closed" size={40} style={{ marginLeft: "10%", marginBottom: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ marginLeft: 50 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ marginBottom: 5, color: '#e07b7b' }}>Mot de passe</Text>
                                <Text>***********</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginRight: "20%" }} onPress={updateNumero} >
                            <Icon name='pencil-sharp' size={40} />
                        </TouchableOpacity>
                    </View>
                    <Image style={{ marginLeft: "10%", marginBottom: 20, marginTop: 18, tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../../assets/Capture.png')} />
                    <TouchableOpacity style={styles.button} onPress={deleteCompte} >
                        <Text style={styles.textButton}>SUPPRIMER LE COMPTE</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView >
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
    button: {
        alignSelf: "center",
        width: '90%',
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e07b7b',
        backgroundColor: '#e07b7b',
        textAlign: "center",
    },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "676767",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    },
});