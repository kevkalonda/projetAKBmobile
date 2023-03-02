import React, { useState } from "react";
import { Text } from 'react-native-paper';
import { View, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, ScrollView, TextInput, StyleSheet, Image, Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';

const Recapitulatif = (props) => {

  const [checked, setChecked] = React.useState(false);
  const [showGateway, setShowGateway] = useState(false);
  const [prog, setProg] = useState(false);
  const [progClr, setProgClr] = useState('#000');


  const cliquer = () => {
    const data = {
      "idcpt": null,
    }
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
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
    <SafeAreaView style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 25, color: "#e07b7b", marginBottom: 10, alignSelf: "center" }}>Recaputilatif reservation</Text>
        <View>
          <Text style={{ alignSelf: "center" }}>Nom Vehicule</Text>
          <Text style={{ alignSelf: "center" }}>Model</Text>
          <Text style={{ alignSelf: "center" }}>Marque</Text>

          <View style={{ marginBottom: 15 }}>
            <View>
              <Text>Prise du vehicule</Text>
              <Text>Date et heure</Text>
            </View>
            <View>
              <Text>Retour du vehicule du vehicule</Text>
              <Text>Date et heure</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>lieu du prise de vehicule</Text>
              <Text>lieu du retour de vehicule</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-arround", marginBottom: "10%", marginTop: 10 }}>
            <Text style={{ marginRight: 10 }}>Montant à payer</Text>
            <Text>15000</Text>
          </View>
          <View style={{ marginBottom: "10%", flexDirection: "row", justifyContent: "space-between", alignSelf: "center", width: "80%" }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>En cochant cette case vous accepter notre condition de confidentialité</Text>
          </View>
          <View style={styles.btnCon}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowGateway(true)}>
              <Text style={styles.btnTxt}>Pay Using PayPal</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showGateway ? (
          <Modal
            visible={showGateway}
            onDismiss={() => setShowGateway(false)}
            onRequestClose={() => setShowGateway(false)}
            animationType={"fade"}
            transparent>
            <View style={styles.webViewCon}>
              <View style={styles.wbHead}>
                <TouchableOpacity
                  style={{ padding: 13 }}
                  onPress={() => setShowGateway(false)}>
                  <Feather name={'x'} size={24} />
                </TouchableOpacity>
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#00457C',
                  }}>
                  PayPal GateWay
                </Text>
                <View style={{ padding: 13, opacity: prog ? 1 : 0 }}>
                  <ActivityIndicator size={24} color={progClr} />
                </View>
              </View>
              <WebView
                source={{ uri: 'http://172.18.2.210:3000/paiement' }}
                style={{ flex: 1 }}
                onLoadStart={() => {
                  setProg(true);
                  setProgClr('#000');
                }}
                onLoadProgress={() => {
                  setProg(true);
                  setProgClr('#00457C');
                }}
                onLoadEnd={() => {
                  setProg(false);
                }}
                onLoad={() => {
                  setProg(false);
                }}
              />
            </View>
          </Modal>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "sans-serif",
  },
  btnCon: {
    height: 45,
    width: '70%',
    elevation: 1,
    backgroundColor: '#00457C',
    borderRadius: 3,
    alignSelf: "center"
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  webViewCon: {
    position: 'absolute',
    top: "10%",
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    zIndex: 25,
    elevation: 2,
  },
});

export default Recapitulatif;
