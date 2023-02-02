import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFont from 'react-native-vector-icons/Ionicons';



const Profil = (props) => {
  const [titleText, setTitleText] = useState("Compte");
  const bodyText = "This is not really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Compte");
  };

  const redirectCompte = () => {
    props.navigation.navigate('Compte')
  }

  const redirectAide = () => {
    props.navigation.navigate('Aide')
  }

  const redirectAdresse = () => {
    props.navigation.navigate('Adresses')
  }
  const redirectMesDocuments = () => {
    props.navigation.navigate('MesDocuments')
  }

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.titleText}>Compte</Text>
        <Text style={{ fontSize: 20, marginLeft: 25, marginBottom: 25 }}>Bonjour Kevin</Text>
        <Text style={{ fontSize: 15, marginLeft: 25, marginRight: 10 }}>Vous pouvez gérer vos reservation et les informations relatives à votre compte ici</Text>
      </View>
      <View style={{ marginLeft: "10%", marginTop: 50 }}>
        <TouchableOpacity onPress={redirectCompte}>
          <View style={styles.cliquable}>
            <Text style={styles.bouttonText}>Données personnelles</Text>
            <Icon name="angle-right" size={26} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
        <Image style={{ tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../assets/Capture.png')} />
        <TouchableOpacity onPress={redirectAdresse}>
          <View style={styles.cliquable}>
            <Text style={styles.bouttonText}>Adresses</Text>
            <Icon name="angle-right" size={26} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
        <Image style={{ tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../assets/Capture.png')} />
        <TouchableOpacity onPress={redirectMesDocuments}>
          <View style={styles.cliquable}>
            <Text style={styles.bouttonText}>Mes documents</Text>
            <Icon name="angle-right" size={26} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
        <Image style={{ tintColor: "#BDBDBD", height: Platform.OS == "ios" ? 2 : 1, width: Platform.OS == "ios" ? "80%" : "80%" }} source={require('../../assets/Capture.png')} />
        <TouchableOpacity onPress={redirectAide}>
          <View style={styles.cliquable}>
            <Text style={styles.bouttonText}>Aide</Text>
            <Icon name="angle-right" size={26} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:"center",
    //alignItems:"center",
    alignContent: "center",
    backgroundColor: "#D8D8D8"
  },
  baseText: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "sans-serif",

  },
  titleText: {
    alignSelf: "center",
    marginTop: "8%",
    marginBottom: "30%",
    fontSize: 20,
    fontWeight: "bold"
  },
  iconStyle: {
    marginRight: "20%",

  },

  bouttonText: {
    fontSize: 20,
    marginRight: "1%",
  },
  cliquable: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10
  }
});

export default Profil;
