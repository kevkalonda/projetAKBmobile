import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription.js';
import MotDePasseOublier from './component/MotDePassOublier.js';
import Home from './component/Home.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Compte from './component/connexion/Profil/Compte';
import Adresse from './component/connexion/Profil/Adresse';
import Aide from './component/connexion/Profil/Aide';
import MesDocuments from './component/connexion/Profil/MesDocuments'
//import IconFont from 'react-native-vector-icons/FontAwesome';
import { Platform, View,Image, TouchableOpacity, StyleSheet } from 'react-native';



export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion" screenOptions={{
        headerMode: 'screen',
        headerStyle: { backgroundColor: '#e07b7b', heigth:80 },
        
      }}>
        <Stack.Screen name="Home" component={Home}  
        options={{
          title:"AKB VEHICULE",
          headerBackVisible:false,
          headerLeft:()=>(
            <View>
              <Image style={{height:40, width:40}} source={require('./assets/AKB_menu.png')} />
            </View>
        ),
        headerRight:()=>(
          <View >
            <TouchableOpacity activeOpacity={0.7}
            onPress={()=>{
              alert("Ici mettre deconnexion")
            }}>
                <Icon style={{}}
                size={30}
                name={Platform.OS==="ios"?"ios-ellipsis-vertical":"ellipsis-vertical"}
              />
            </TouchableOpacity>
          </View>
        )
      }}
        />
        <Stack.Screen name="Connexion" component={Connexion} options={{  headerShown: false }}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{ headerShown: false }} />
        <Stack.Screen name="MotDePasseOublier" component={MotDePasseOublier} options={{ headerShown: false }} />

        <Stack.Screen name="Compte" component={Compte} options={{  title:'Données personnelles' }}/>
        <Stack.Screen name="Aide" component={Aide} options={{  title:'Aide' }}/>
        <Stack.Screen name="Adresses" component={Adresse} options={{  title:'Adresses' }}/>
        <Stack.Screen name="MesDocuments" component={MesDocuments} options={{  title:'Mes documents' }}/>
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


