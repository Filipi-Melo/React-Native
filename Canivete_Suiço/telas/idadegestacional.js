import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilos from '../estilos';

/** `Calcula a quantidade de semanas a partir da ultrassom.`*/
export default function App(){
  const [dia_ultra, setDiaUltra] = useState('');
  const [dia_atual, setDiaAtual]= useState('');
  const [idade, setIdade] = useState('');
  
  const calcularIdade = () => setIdade( (parseFloat( dia_ultra) >0 && parseFloat(dia_atual)>0) ? 
  (parseFloat(dia_atual)-parseFloat(dia_ultra))/7: 
  'Informe valores positivos diferentes de zero');

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Insira os dados abaixo para calcular a idade gestacional.</Text>
      <TextInput
        placeholder="Dia da ultrassonografia"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={dia_ultra}
        onChangeText={dia_ultra=>setDiaUltra(dia_ultra)}/>
      <TextInput
        placeholder="Dia Atual"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={dia_atual}
        onChangeText={dia_atual=>setDiaAtual(dia_atual)}/>
      <Text> </Text>
      <Button title='Calcular' onPress={calcularIdade}/>
      <Text style={Estilos.paragraph}>{idade ? '\nIdade gestacional: '+idade+' semanas': ''}</Text>
    </View>
  )
}
