import React, { useState } from "react";
import { Text } from 'react-native-paper';
import {  View,SafeAreaView, TouchableOpacity,ActivityIndicator,Modal, ScrollView, TextInput, StyleSheet, Image, Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import Feather from 'react-native-vector-icons/Feather';

const Recapitulatif = () => {
  const [titleText, setTitleText] = useState("Publier");
  const bodyText = "This is not really a bird nest.";
  const [checked, setChecked] = React.useState(false);
  const [showGateway, setShowGateway] = useState(false);
  const [prog, setProg] = useState(false);
  const [progClr, setProgClr] = useState('#000');

  async function _onApprove(data, actions) {
    let order = await actions.order.capture();
    console.log(order);
    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(JSON.stringify(order));
    return order;
  }

  function _onError(err) {
    console.log(err);
    let errObj = {
      err: err,
      status: "FAILED",
    };
    window.ReactNativeWebView &&
      window.ReactNativeWebView.postMessage(JSON.stringify(errObj));
  }

  const onPressTitle = () => {
    setTitleText("Publier [pressed]");
  };

  return (
    <SafeAreaView style={{flex: 1}}>
    <View>
      <Text>Recaputilatif reservation</Text>
      <View>
        <Text>Nom Vehicule</Text>
        <Text>Model</Text>
        <Text>Marque</Text>

        <View>
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
        <View>
          <Text>Assurance vehicule</Text>
          <Text>Montant à payer</Text>
          <Text>15000</Text>
        </View>
        <View>
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
              style={{padding: 13}}
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
            <View style={{padding: 13, opacity: prog ? 1 : 0}}>
              <ActivityIndicator size={24} color={progClr} />
            </View>
          </View>
          <WebView
            source={{uri: 'https://www.google.com'}}
            style={{flex: 1}}
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
