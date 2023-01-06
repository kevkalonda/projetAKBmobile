import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from './component/Connexion';
import Inscription from './component/Inscription.js';
import MotDePasseOublier from './component/MotDePassOublier.js';
import Home from './component/Home.js';
import Icon from 'react-native-vector-icons/Ionicons';
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
                name={Platform.OS==="ios"?"ellipsis-vertical":"md-more"}
              />
            </TouchableOpacity>
          </View>
        )
      }}
        />
        <Stack.Screen name="Connexion" component={Connexion} options={{  headerShown: false }}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{ headerShown: false }} />
        <Stack.Screen name="MotDePasseOublier" component={MotDePasseOublier} options={{ headerShown: false }} />
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


