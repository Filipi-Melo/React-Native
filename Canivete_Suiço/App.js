import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './estilos';
import Cotação from './telas/cotacao';
import Combustiveis from './telas/combustiveis';
import Gestacao from './telas/idadegestacional';
import Calculadora from './telas/calculadora';
import Juros from './telas/juros';
import Triangulo from './telas/areatriangulo';
import Desconto from './telas/desconto';

const Br = () => <Text>{'\n'}</Text>;

/**`Gera a tela principal.`*/
const HomeScreen = ({ navigation }) => {
  let count = 1;
  const Buttons = () => {
    let id = count++;
    return (
      <Button
        title={titles[id]}
        onPress={() => navigation.navigate(names[id])}
      />
    );
  };
  return [
    <View style={Estilos.container}>
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
      <Buttons />
      <Br />
    </View>
  ];
};

const titles = [
  'Aplicativo Canivete Suíço',
  'Gasolina ou etanol?',
  'Area do Triângulo',
  'Idade gestacional',
  'Calculadora',
  'Desconto',
  'Cotação',
  'Juros',
];
const names = [
  'Home',
  'combustiveis',
  'area',
  'gestação',
  'calculadora',
  'desconto',
  'cotação',
  'juros',
];
const components = [
  HomeScreen,
  Combustiveis,
  Triangulo,
  Gestacao,
  Calculadora,
  Desconto,
  Cotação,
  Juros,
];
/**`Gerencia a navegação.`*/
export default function App() {
  const Stack = createNativeStackNavigator();
  let i = 0;
  const Screens = () => {
    let id = i++;
    return (
      <Stack.Screen
        name={names[id]}
        component={components[id]}
        options={{ title: titles[id] }}
      />
    );
  };
  return [
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Screens()}
        {Screens()}
        {Screens()}
        {Screens()}
        {Screens()}
        {Screens()}
        {Screens()}
        {Screens()}
      </Stack.Navigator>
    </NavigationContainer>
  ];
}
