import {useState} from 'react';
import { Text, View , Button, TextInput} from 'react-native';
import Estilos from '../estilos'

/**`Calcula a quantidade de desconto.`*/
export default function App() {
  const [num1, setNum1]=useState('');
  const [num2, setNum2]=useState('');
  const [res, setRes]=useState('');

  const Br = ()=> <Text>{'\n'}</Text>

  const calcdesc = ()=> setRes(num1 > 0 && num2 > 0 ? (parseFloat(num1)*parseFloat(num2)/100) :'');
  
  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Calcular o desconto:</Text>
      <TextInput 
        placeholder='Digite um valor'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={num1=> setNum1(num1)}/>
      <TextInput 
        placeholder='Digite a % de desconto'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={num2=> setNum2(num2)}/>
      <Br/>
      <Button title='Calcular o desconto' onPress={calcdesc}/>
      <Br/>
      <Text style={Estilos.paragraph}> {res ? `O desconto é : ${res}\n O valor com desconto: ${parseFloat(num1)-parseFloat(res)}` : ''} </Text>
    </View>
  );
}