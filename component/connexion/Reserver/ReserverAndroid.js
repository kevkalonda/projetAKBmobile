import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native-paper';

export default function ReserverAndroid(props) {

    var ico = "vehicule4.jpg";
    const getUrl = () => require('../../../assets/' + ico);

    const recapReservation = () => {
        props.navigation.navigate("Recapitulatif", { id: props.route.params.id })
    }

    const pleinArendrePlein = () => {
        alert("Le carburant est à votre charge" +
            " et vous devrez restituer le véhicule " +
            "avec le niveau de carburant initial. " +
            "Si vous ne pouviez pas la rendre " +
            "avec le même niveau, des frais " +
            "supplémentaires de 20 € " +
            "s'appliqueront en plus du prix " +
            "du carburant.")
    };

    return (
        <View>
            <Image source={getUrl()} style={{ width: "100%", height: "30%", marginBottom: 2, alignSelf: "center" }} />
            <SafeAreaView style={styles.container2}>
                <ScrollView >
                    <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{}}>
                            <View>
                                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                    <Icon name="car-sport" size={30} />
                                    <Text style={{ marginLeft: 10, marginTop: 2 }}>Boite Manuelle</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <IconCom name="car-door" size={30} />
                                        <Text style={{ marginLeft: 4, marginTop: 2, fontSize: 12 }}>3 portes</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <IconFont name="user" size={30} />
                                        <Text style={{ marginLeft: 4, marginTop: 2, fontSize: 12 }}>4 places</Text>
                                    </View>
                                </View>
                                <Text>.................................</Text>
                                <View style={{ flexDirection: "row", marginTop: 10 }}>
                                    <IconCom name='gas-station' size={40} />
                                    <View>
                                        <Text style={{ fontSize: 12, color: "#e07b7b" }}>Politique de carburant</Text>
                                        <TouchableOpacity onPress={pleinArendrePlein}>
                                            <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>Plein à rendre plein</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, alignSelf: "center" }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                                <Text style={{ marginLeft: 2 }}>Responsabilité civile</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                                <Text style={{ marginLeft: 2 }}>Assurance tous risques</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                <Icon name="checkmark-circle" color={"green"} style={{ marginTop: 2 }} />
                                <Text style={{ marginLeft: 2 }}>Annulation gratuite</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <View >
                            <Text variant="titleLarge" style={{ marginBottom: 10, color: "#e07b7b" }}>Prise de vehicule</Text>
                            <Image style={{ marginBottom: 25, tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../../assets/Capture.png')} />
                            <View style={{ marginBottom: 30 }}>
                                <Text variant='titleMedium' style={{ color: "#e07b7b" }}>Lieux du prise de vehicule : </Text>
                                <Text variant='titleMedium'>12 rue Robespierres 29200 Brest France</Text>
                            </View>
                        </View>
                        <Text variant="titleLarge" style={{ marginBottom: 10, marginTop: 20, color: "#e07b7b" }}>Retour de vehicule</Text>
                        <Image style={{ marginBottom: 25, tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../../assets/Capture.png')} />
                        <View style={{ marginBottom: 30 }}>
                            <Text variant='titleMedium' style={{ color: "#e07b7b" }}>Lieux du retour de vehicule : </Text>
                            <Text variant='titleMedium'>12 rue Robespierres 29200 Brest France</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={recapReservation}
                        >
                            <Text style={styles.textButton}>Payer</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}