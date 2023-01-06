import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,Image, SegmentedControlIOS } from 'react-native';

export default function Inscription(props) {
    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';
    const [text, setText] = useState(initialText);
    const [count, setCount] = useState(0);
    const onPress = () =>{
        alert("Connexion")
    };

    const retourConexion=()=>{
        props.navigation.navigate('Connexion')
    }

    return (
        <View style={styles.container}>
            <Image style={{marginTop:5, width:200, height:200}} source={require('../assets/AKB_menu.png')} />
            <TextInput
            style={styles.top}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={'Sexe'}
            />
            <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                <TextInput
                style={styles.input2}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setText}
                value={text}
                placeholder={'Nom'}
                />
                <TextInput
                style={styles.input2}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setText}
                value={text}
                placeholder={'Prenom'}
                />
            </View>
            
            <TextInput
            style={styles.top}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={'mail'}
            />
            <TextInput
            style={styles.top}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={'Mot de passe'}
            />
            <TextInput
            style={styles.top}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={'Confirmation mot de passe'}
            />
            <TouchableOpacity style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textButton}>S'inscrire</Text>
            </TouchableOpacity>
            <View style={{marginTop:25, alignItems: 'center',}}>
                <View style={{marginTop:30, flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, color:"white"}}>Tu as déjà un compte ? </Text>
                    <TouchableOpacity
                    onPress={retourConexion} >
                        <Text style={{fontSize: 20, color:"#676767", fontWeight: "bold"}}> se connecter</Text>
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
      justifyContent:'center',
    },
    top: {
      width:'90%',
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius:3,
      marginTop: 10,
      padding:16,
    },
    input2:{
      width:'40%',
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius:3,
      marginTop: 10,
      padding:16,
      marginRight: 20,
      marginLeft:20,
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


  });