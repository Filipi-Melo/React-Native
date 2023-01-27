import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilos from '../estilos';

/**`Calcula a área do triângulo.`*/
export default function App() {
  const Br = ()=><Text>{'\n'}</Text>
  const [base, setBase]= useState('');
  const [altura, setAltura]= useState('');
  const [area, setArea]= useState('');
  const Area = ()=> setArea( base>0 && altura>0 ? parseFloat(base)*parseFloat(altura)/2:'')
  
  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}>Insira os dados para calcular a área do triângulo:</Text>   
      <TextInput 
        placeholder='Digite a base'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={base => setBase(base)}/>
      <TextInput 
        placeholder='Digite a altura'
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}/>
      <Br/>
      <Button title='Calcular' onPress={Area}/>
      <Br/>   
      <Text style={Estilos.paragraph}>{area ? `Resultado: ${area}` : ''}</Text>
    </View>
  );
}