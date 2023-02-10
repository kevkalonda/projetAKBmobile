import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MotDePasseOublier(props) {
    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';

    const [text, setText] = useState(initialText);
    const [count, setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(false);
    const onPress = () => {
        alert("Connexion")
    };


    const envoyer = () => {
        setIsOnline(!isOnline);
    }

    const retourConexion = () => {
        props.navigation.navigate('Connexion')
    }


    return isOnline === false ? (
        <View style={styles.container}>
            <Text style={styles.textMdpOublier}>Mot de passe oublier ?</Text>
            <Text style={{ margin: 20, color: "white", textAlign: "center" }}>Saisir l'adresse mail assoccié au compte pour réinitialiser le mot de passe </Text>
            <TextInput
                editable
                style={styles.top}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setText}
                value={text}
                placeholder={'Please type here…'}
            />
            <TouchableOpacity style={styles.button}
                onPress={envoyer}>
                <Text style={styles.textButton}>Envoyer</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    ) : (
        <View style={styles.container}>
            <Image style={{ height: 300, width: 300 }} source={require('../assets/AKB_menu.png')} />
            <Text style={{ margin: 20, color: "white", textAlign: "center" }}>Un mail de reinitalisation de mot de passe a été envoyé à l'adresse </Text>
            <TouchableOpacity style={styles.button}
                onPress={onPress}>
                <Text style={styles.textButton}>Renvoyer le mail de confirmation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={retourConexion}>
                <Text style={styles.textButton}>Retour au menu de connexion</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
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
    textMdpOublier: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "10%",
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