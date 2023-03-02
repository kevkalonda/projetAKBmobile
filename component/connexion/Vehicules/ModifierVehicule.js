import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  View, TouchableOpacity,SafeAreaView, ScrollView, TextInput, StyleSheet, Image, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { Picker } from "@react-native-picker/picker";
import { Text } from 'react-native-paper';



export default function ModifierVehicule(props) {

    var ico = "vehicule4.jpg";
    const getUrl = () => require('../../../assets/' + ico);
    const [date, setDate] = useState(new Date());
    
   
    const [visibleTime, setVisibleTime] = React.useState(false)
    const onDismissTime = React.useCallback(() => {
        setVisibleTime(false)
    }, [setVisibleTime])
  
    const onConfirmTime = React.useCallback(
      ({ hours, minutes }) => {
        setVisibleTime(false);
        console.log({ hours, minutes });
      },
      [setVisibleTime]
    );

    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
      setVisible(false);
    }, [setVisible])

    const onChange = React.useCallback(({ date }) => {
        setVisible(false)
        setDate(date);
      }, [])

    const updateDate =()=>{
        setVisible(true);
    }

    const recapReservation=()=>{
        props.navigation.navigate("Recapitulatif",{id:props.route.params.id})
    }

    const [Enable, setEnable] = useState("00");
    const [Enable2, setEnable2] = useState("00");

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

    const deleteVehicule=(id)=>{
        const data = {
            "idcpt": null,
          }
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
          };

        // fetch('http://192.168.90.152:8083/detailUser', requestOptions)
    //          .then(response => response.json())
    //          .then(data => {
    //              if (data.statutTO === "user") {
    //                 setMdp(data.mdpTO)
    //                 setNom(data.nomusrTO)
    //                 setPrenom(data.prenomusrTO)

    //              }


    //          });
    }

    return (
        <View style={styles.container}>
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
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={recapReservation}
                        >
                            <Text style={styles.textButton}>Supprimer</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}
                            onPress={recapReservation}
                        >
                            <Text style={styles.textButton}>ANNULER</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
      },
      page: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    container: {
        flex: 1,
    },
    container2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#D8D8D8",
        justifyContent: 'center',
    },
    containerCarroussel: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: "80%",
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: "80%",
        height: 300,
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
        width: '90%',
        padding: 15,
        marginTop: 30,
        marginBottom: 30,
        alignSelf:"center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e07b7b',
        backgroundColor: '#e07b7b',
        textAlign: "center",
    },
    eye: {
        position: 'absolute',
        top: 11,
        right: 37
    },

});