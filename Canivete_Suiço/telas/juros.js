import {useState} from 'react';
import { Text, View , Button, TextInput} from 'react-native';
import Estilos from '../estilos'

/**`Calcula a quantidade de juros.`*/
export default function App() {
  const [num1, setNum1]=useState('');
  const [num2, setNum2]=useState('');
  const [res, setRes]=useState('');

  const Br = ()=> <Text>{'\n'}</Text>

  const calcJuros = ()=> setRes(num1 > 0 && num2 > 0 ? (parseFloat(num1)*parseFloat(num2)/100) :'');
  
  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Calcular os juros:</Text>
      <TextInput 
        placeholder='Digite um valor'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={num1=> setNum1(num1)}/>
      <TextInput 
        placeholder='Digite o % de juros'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={num2=> setNum2(num2)}/>
      <Br/>
      <Button title='Calcular os juros' onPress={calcJuros}/>
      <Br/>
      <Text style={Estilos.paragraph}> {res ? `Os juros são: ${res}\n O valor total é : ${parseFloat(num1)+parseFloat(res)}` : ''} </Text>
    </View>
  );
}