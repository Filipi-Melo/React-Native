import { Text, View, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Estilos from './estilos'; 
import Cotação from './telas/cotacao';
import Combustiveis from './telas/combustiveis';
import Gestacao from './telas/idadegestacional'
import Calculadora from './telas/calculadora'
import Juros from './telas/juros'
import Triangulo from './telas/areatriangulo'
import Desconto from './telas/desconto'

const Br = ()=><Text>{'\n'}</Text>
/**`Gera a tela principal.`*/
const HomeScreen = ({ navigation })=> [
    <View style={Estilos.container}><Br/>
      <Button title="Gasolina ou etanol?" onPress={()=>navigation.navigate('combustiveis')}/><Br/>
      <Button title="Area do Triângulo" onPress={()=> navigation.navigate('area')}/><Br/>
      <Button title="Idade gestacional" onPress={()=> navigation.navigate('gestação')}/><Br/>
      <Button title="Calculadora" onPress={()=> navigation.navigate('calculadora')}/><Br/>
      <Button title="Desconto" onPress={()=> navigation.navigate('desconto')}/><Br/>
      <Button title="Cotação" onPress={()=> navigation.navigate('cotação')}/><Br/>
      <Button title="Juros" onPress={()=> navigation.navigate('juros')}/><Br/>
     </View>
];

const Stack = createNativeStackNavigator();
/**`Gerencia a navegação.`*/
export default function App(){
  return [
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Aplicativo Canivete Suíço'}}/>
        <Stack.Screen name="cotação" component={Cotação} options={{ title: 'Cotação'}}/>
        <Stack.Screen name="combustiveis" component={Combustiveis} options={{title:'Combustiveis'}}/>
        <Stack.Screen name="gestação" component={Gestacao} options={{ title: 'Idade gestacional'}}/>
        <Stack.Screen name="juros" component={Juros} options={{title:'Calcular Juros'}}/>
        <Stack.Screen name="area" component={Triangulo} options={{title:'Area do triângulo'}}/>
        <Stack.Screen name="calculadora" component={Calculadora} options={{title:'Calculadora'}}/>
        <Stack.Screen name="desconto" component={Desconto} options={{title:'Calcular o Desconto'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ]
}