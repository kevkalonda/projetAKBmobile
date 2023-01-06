import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import HomeScreen from './connexion/HomeScreen'
import Profil from './connexion/Profil';
import Reservation from './connexion/Reservation';
import Favoris from './connexion/Favoris';
import Publier from './connexion/Publier';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
    shifting={true}
    labeled={true}
    sceneAnimationEnabled={false}
    activeColor="#00aea2"
    inactiveColor="#676767"
    barStyle={{ backgroundColor: '#e07b7b',}}
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        const icons = {
          Accueil: 'home',
          Favoris: Platform.OS==="ios"?"ios-heart-outline" : 'heart-outline',
          Reservation:'cart-sharp',
          Profil:'person-circle',
          Publier:'add-circle-outline',
        };
      
  
        return (
              <Icon
              name={icons[route.name]}
              color={color}
              size=  {26}
            />
        );
      },
      tabBarBadge:false
    })}>
      <Tab.Screen name="Accueil" component={HomeScreen} options={{title:'Accueil'}}/>
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Publier" component={Publier} />
      <Tab.Screen name="Reservation" component={Reservation} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
export default Home;


