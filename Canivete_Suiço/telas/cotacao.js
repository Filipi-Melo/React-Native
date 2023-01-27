import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilos from '../estilos';

/**`Calcula a quantidade de dólares a partir da cotação.`*/
export default function App(){
  const [valor, setValor] = useState('');
  const [cotacao, setCotacao]= useState('');
  const [parcelas, setparcelas] = useState('');

  const Br = ()=><Text>{'\n'}</Text>
  
  const parcelamento = () => setparcelas((valor > 0 && cotacao > 0) ? 'Valor convertido: $'+(parseFloat(valor)/parseFloat(cotacao)).toFixed(2) : 'Informe valores positivos diferentes de zero')

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Insira os dados abaixo para calcular a cotação.</Text>
      <TextInput
        placeholder="Valor em R$"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={valor}
        onChangeText={valor=>setValor(valor)}/>
      <TextInput
        placeholder="Valor da Cotação $"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={cotacao}
        onChangeText={cotacao=>setCotacao(cotacao)}/>
      <Br/>
      <Button title='Calcular' onPress={parcelamento}/>
      <Br/>
      <Text style={Estilos.paragraph}> {parcelas ? `${parcelas}`: ''}</Text>
    </View>
  )
}