import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,Image, Platform   } from 'react-native';

export default function Adresses(props) {
    
    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';

    const [showPass, setShowPass] = useState(false);
    const [text, setText] = useState(initialText);
    const [count, setCount] = useState(0);
    const onPress = () =>{
        alert("Connexion")
    };

    const connexion=()=>{
        props.navigation.navigate("Home")
    }

    const inscription = ()=>{
        props.navigation.navigate('Inscription')
    }
    const mdpOublier = ()=>{
        props.navigation.navigate('MotDePasseOublier')
    }
    return (
        <View style={styles.container}>
            <View>
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
      justifyContent:'center',
    },
    top: {
      width:'90%',
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius:3,
      marginTop: 10,
      padding:Platform.OS=="ios"?16:8,
    },

    top2: {
        width:'70%',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius:3,
        marginTop: 10,
        padding:16,
      },
    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color:"white",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center"
    },
    button: {
        width:'90%',
        padding: 15,
        marginTop:20,
        marginBottom:20,
        borderWidth: 1,
        borderRadius:10,
        borderColor:'#e07b7b',
        backgroundColor:'#676767',
        textAlign:"center",
    },
    eye: {
        position: 'absolute',
        top: 11,
        right: 37
    },

  });