import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image, Platform } from 'react-native';

export default function Aide(props) {

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
                    <Text style={{fontWeight:"bold", fontSize:15, alignSelf:"center", fontStyle:"italic"}}>What is Lorem Ipsum?</Text>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Text style={{fontWeight:"bold", fontSize:15, alignSelf:"center", fontStyle:"italic"}}>Why do we use it?</Text>
                    <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>
                    <Text style={{fontWeight:"bold", fontSize:15, alignSelf:"center", fontStyle:"italic"}}>Where does it come from?</Text>
                    <Text>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                        This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                    </Text>
                    <Text style={{fontWeight:"bold", fontSize:15, alignSelf:"center", fontStyle:"italic"}}>Where can I get some?</Text>
                    <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Text>

                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#D8D8D8",
        justifyContent: 'center',
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
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#e07b7b',
        backgroundColor: '#676767',
        textAlign: "center",
    },
    eye: {
        position: 'absolute',
        top: 11,
        right: 37
    },

});