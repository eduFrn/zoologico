
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Button } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font'

import Splash from './src/pages/Splash/Index';
import Cadastro from './src/pages/Cadastro/Index';
import Home from './src/pages/Home/Index';
import Sobre from './src/pages/Sobre/Index';
import Territorio1 from './src/pages/Territorios/Territorio1/Index';
import Territorio2 from './src/pages/Territorios/Territorio2/Index';
import Territorio3 from './src/pages/Territorios/Territorio3/Index';
import Territorio4 from './src/pages/Territorios/Territorio4/Index';
import Territorio5 from './src/pages/Territorios/Territorio5/Index';
import Territorio6 from './src/pages/Territorios/Territorio6/Index';
import Animal from './src/pages/Animal/Index';
import Usuario from './src/pages/Usuario/Index';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loaded] = useFonts({
     Fruit: require('./assets/fonts/Fruit Days.otf')
  })

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#ffedde',
          },
          headerTintColor: 'black'

        }}
      >
        <Stack.Screen name="Splash" component={Splash}
          options={
            {
              headerShown: false
            }
          }
        />

        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{
            headerTitle: (props) => <Image style={{width:87, height:50}} source={require('./assets/titulo.png')}/>,
            headerBackVisible: false,
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity style={{height:'100%'}}>
                <Image source={require('./assets/menu.png')} style={{ width: 50, height: 50 }} />
              </TouchableOpacity>
            ),
            
          }}
        />

        <Stack.Screen name="Território 1" component={Territorio1}/>
        <Stack.Screen name="Território 2" component={Territorio2}/>
        <Stack.Screen name="Território 3" component={Territorio3}/>
        <Stack.Screen name="Território 4" component={Territorio4}/>
        <Stack.Screen name="Território 5" component={Territorio5}/>
        <Stack.Screen name="Território 6" component={Territorio6}/>
        <Stack.Screen name="Usuário" component={Usuario}/>
        <Stack.Screen name="Animal" component={Animal}
          options={
            ({ route }) => ({ title: route.params.nome })
          }
        
        />
        <Stack.Screen name="Sobre" component={Sobre}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})