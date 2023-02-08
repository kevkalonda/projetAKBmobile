import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import HomeScreen from './connexion/HomeScreen'
import Profil from './connexion/Profil';
import Reservation from './connexion/Reservation';
import Favoris from './connexion/Favoris';
import Vehicule from './connexion/Vehicules/Vehicule';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function Home(props) {
  const idUser = props.route.params.id;
  return (
    <Tab.Navigator
      shifting={true}
      labeled={true}
      sceneAnimationEnabled={false}
      activeColor="#00aea2"
      inactiveColor="#676767"
      barStyle={{ backgroundColor: '#e07b7b', }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const icons = {
            Accueil: 'home',
            Favoris: Platform.OS === "ios" ? "ios-heart-outline" : 'heart-outline',
            Reservation: 'cart-sharp',
            Profil: 'person-circle',
            Publier: 'add-circle-outline',
          };


          return (
            <Icon
              name={icons[route.name]}
              color={color}
              size={26}
            />
          );
        },
        tabBarBadge: false
      })}>
      <Tab.Screen name="Accueil" component={HomeScreen} options={{ title: 'Accueil' }} initialParams={{id:idUser}}/>
      <Tab.Screen name="Favoris" component={Favoris} initialParams={{id:idUser}}/>
      <Tab.Screen name="Publier" component={Vehicule} initialParams={{id:idUser}}/>
      <Tab.Screen name="Reservation" component={Reservation} initialParams={{id:idUser}}/>
      <Tab.Screen name="Profil" component={Profil} initialParams={{id:idUser}}/>
    </Tab.Navigator>
  );
}
export default Home;


