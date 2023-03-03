import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription.js';
import MotDePasseOublier from './component/MotDePassOublier.js';
import Home from './component/Home.js';
import Vehicule from './component/connexion/Vehicules/Vehicule';
import Compte from './component/connexion/Profil/Compte';
import Adresse from './component/connexion/Profil/Adresse';
import Aide from './component/connexion/Profil/Aide';
import Reserver from './component/connexion/Reserver/Reserver';
import MesDocuments from './component/connexion/Profil/MesDocuments';
import Recapitulatif from './component/connexion/Reserver/Recapitulatif';
import AddVehiculeMarque from './component/connexion/Vehicules/AddVehiculeMarque';
import AddVehiculeCarburant from './component/connexion/Vehicules/AddVehiculeCarburant';
import AddVehiculeAvantDernier from './component/connexion/Vehicules/AddVehiculeAvantDernier';
import RecapitulatifAddVehicul from './component/connexion/Vehicules/RecapitulatifAddVehicul';
import ModifierVehicule from './component/connexion/Vehicules/ModifierVehicule';
import ReserverAndroid from './component/connexion/Reserver/ReserverAndroid'
//import IconFont from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Platform, View,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Menu, Divider,Provider } from 'react-native-paper';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [visible, setVisible] = React.useState(false);

  const deconnexion = ()=>{
    alert("deconnexion")
  }
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion" screenOptions={{
        headerMode: 'screen',
        headerStyle: { backgroundColor: '#e07b7b', heigth:80 },
        
      }}>
        <Stack.Screen name="Home" component={Home}  
        options={{
          title:"AKB",
          headerBackVisible:false,
          
          headerLeft:()=>(
            <View>
              <Image style={{height:40, width:40}} source={require('./assets/AKB_menu.png')} />
            </View>
        ),
      }}
        />
        <Stack.Screen name="Connexion" component={Connexion} options={{  headerShown: false }}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{ headerShown: false }} />
        <Stack.Screen name="MotDePasseOublier" component={MotDePasseOublier} options={{ headerShown: false }} />
        
        <Stack.Screen name="Reserver" component={Reserver} options={{  title:'Reserver', headerBackTitle:"" }}/>
        <Stack.Screen name="Recapitulatif" component={Recapitulatif} options={{  title:'Recapitulatif', headerBackTitle:"" }}/>

        <Stack.Screen name="Vehicule" component={Vehicule} options={{  title:'Vehicule', headerBackTitle:"" }}/>
        <Stack.Screen name="AddVehiculeMarque" component={AddVehiculeMarque} options={{  title:'', headerBackTitle:"" }}/>
        <Stack.Screen name="AddVehiculeCarburant" component={AddVehiculeCarburant} options={{  title:'', headerBackTitle:"" }}/>
        <Stack.Screen name="AddVehiculeAvantDernier" component={AddVehiculeAvantDernier} options={{  title:'', headerBackTitle:"" }}/>
        <Stack.Screen name="RecapitulatifAddVehicul" component={RecapitulatifAddVehicul} options={{  title:'', headerBackTitle:"" }}/>
        <Stack.Screen name="ModifierVehicule" component={ModifierVehicule} options={{  title:'', headerBackTitle:"Mes publication" }}/>
        <Stack.Screen name="ReserverAndroid" component={ReserverAndroid} options={{  title:'', headerBackTitle:"" }}/>

        <Stack.Screen name="Compte" component={Compte} options={{  title:'Données personnelles', headerBackTitle:"" }}/>
        <Stack.Screen name="Aide" component={Aide} options={{  title:'Aide', headerBackTitle:"" }}/>
        <Stack.Screen name="Adresses" component={Adresse} options={{  title:'Adresses', headerBackTitle:"" }}/>
        <Stack.Screen name="MesDocuments" component={MesDocuments} options={{  title:'Mes documents', headerBackTitle:"" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon :{
    paidingLeft:10
  },
  iconContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:120,
  }
})


