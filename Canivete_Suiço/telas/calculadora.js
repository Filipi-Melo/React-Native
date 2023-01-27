import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from '../estilos'

/**`Calculadora simples.`*/
export default function App() {
  const [num1, setNum1]= useState('');
  const [num2, setNum2]= useState('');
  const [res, setRes]= useState('');

  const SOMAR  = ()=> setRes(num1> 0 && num2> 0 ? parseFloat(num1)+parseFloat(num2) : '');
  const SUBTRAIR = ()=> setRes(num1> 0 && num2> 0 ? parseFloat(num1)-parseFloat(num2) : '');
  const MULTIPLICAR = ()=> setRes(num1> 0 && num2> 0 ? parseFloat(num1)*parseFloat(num2) : '');
  const DIVIDIR = ()=> setRes(num1> 0 && num2> 0 ? (parseFloat(num1)/parseFloat(num2)).toFixed(3) : '');
  const POTENCIA = ()=> setRes(num1> 0 && num2> 0 ? parseFloat(num1)**parseFloat(num2) : '');
  const RAIZ = ()=> setRes(num1> 0 && num2> 0 ? (parseFloat(num1)**(1/parseFloat(num2))).toFixed(3) : '');
  const PORCENTAGEM = ()=> setRes(num1> 0 && num2> 0 ? (parseFloat(num1)*parseFloat(num2)/100).toFixed(3) : '');
  const FATORIAL = ()=> setRes(num1> 0 ? ((num) => {let fatorial = 1;for(i=1; i <= num; i++) fatorial *= i;return fatorial})(parseFloat(num1)) : '');

  const Br = ()=><Text>{'\n'}</Text>

  return [
    <View style={styles.container}>
      <Text style={styles.paragraph}>Calcular:</Text>   
      <TextInput 
        placeholder='Digite um número'
        style={styles.paragraph}
        keyboardType={'numeric'}
        onChangeText={num1 => setNum1(num1)}/>
      <TextInput 
        placeholder='Digite um número'
        style={styles.paragraph}
        keyboardType={'numeric'}
        onChangeText={num2 => setNum2(num2)}/>
      <Br/>
      <Text>
        <Button title='Somar' onPress={SOMAR}/>{' '}
        <Button title='Subtrair' onPress={SUBTRAIR}/>
      </Text>
      <Br/>
      <Text>
        <Button title='Multiplicar' onPress={MULTIPLICAR}/>{' '}
        <Button title='Dividir' onPress={DIVIDIR}/>
      </Text>
      <Br/>
      <Text>
        <Button title='Potenciação' onPress={POTENCIA}/>{' '}
        <Button title='Fatorial' onPress={FATORIAL}/>
      </Text>
      <Br/>
      <Text>
        <Button title='Radiciação' onPress={RAIZ}/>{' '}
        <Button title='Porcentagem' onPress={PORCENTAGEM}/>
      </Text>
      <Text style={styles.paragraph}>{res ? `\n Resultado: ${res}` : ''}</Text>
    </View>
  ];
}