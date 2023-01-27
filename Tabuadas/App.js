import { Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './estilos'
import tabuada from './tela/tabuadas'

const Br = ()=><Text>{'\n'}</Text>
/**`Cria a tela principal.`*/
const HomeScreen = ({ navigation })=>{
  let count=1
  const Buttons=()=> {
    let id = count++;
    return <Button title={titles[id]} onPress={()=>navigation.navigate(names[id])}/>
  }
  return [
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}>Tabuadas</Text><Br/>
      <Buttons/><Br/><Buttons/><Br/><Buttons/><Br/><Buttons/><Br/><Buttons/><Br/>
      <Buttons/><Br/><Buttons/><Br/><Buttons/><Br/><Buttons/><Br/><Buttons/><Br/>
    </View>
  ];
}

const titles=['APP Tabuada','Tabuada do 1','Tabuada do 2','Tabuada do 3','Tabuada do 4','Tabuada do 5','Tabuada do 6','Tabuada do 7','Tabuada do 8','Tabuada do 9','Tabuada do 10']
const names=['Home','TabuadaDo1','TabuadaDo2','TabuadaDo3','TabuadaDo4','TabuadaDo5','TabuadaDo6','TabuadaDo7','TabuadaDo8','TabuadaDo9','TabuadaDo10']
const components=[HomeScreen,()=>tabuada(1),()=>tabuada(2),()=>tabuada(3),()=>tabuada(4),()=>tabuada(5),()=>tabuada(6),()=>tabuada(7),()=>tabuada(8),()=>tabuada(9),()=>tabuada(10)]

/**`Inicia o programa.`*/
export default function App() {
  const Stack = createNativeStackNavigator();
  let i =-1
  const Screens = ()=>{
    i++;
    return <Stack.Screen name={names[i]} component={components[i]}  options={{title:titles[i]}}/>
  }
  return [
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" component={Screens}>
        {Screens()}{Screens()}{Screens()}{Screens()}
        {Screens()}{Screens()}{Screens()}{Screens()}
        {Screens()}{Screens()}{Screens()}
      </Stack.Navigator>
    </NavigationContainer>
  ];
}