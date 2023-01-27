import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilos from '../estilos';

/**`Compara o preço do litro da gasolina e etanol.`*/
export default function App(){
  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState('');

  const Br = ()=><Text>{'\n'}</Text>

  const comparar = ()=> setResultado(etanol > 0 && gasolina > 0 ? `70% de ${parseFloat(gasolina).toFixed(2)}R$ = ${(gasolina*0.7).toFixed(2)}R$ \n`+ (parseFloat(gasolina)*0.7 > parseFloat(etanol) ? 'É melhor abastecer com etanol' : 'É melhor abastecer com gasolina'):'Informe valores positivos diferentes de zero');

  return (
    <View style={Estilos.container}>
      <Text style={Estilos.paragraph}> Insira os dados abaixo para comparar os preços do litros.</Text>
      <TextInput
        placeholder="Litro da gasolina"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={gasolina}
        onChangeText={gasolina=>setGasolina(gasolina)}/>
      <TextInput
        placeholder="Litro do etanol"
        style={Estilos.paragraph}
        keyboardType={'numeric'}
        value={etanol}
        onChangeText={etanol=>setEtanol(etanol)}/>
      <Br/>
      <Button title='Calcular' onPress={comparar}/>
      <Br/>
      <Text style={Estilos.paragraph}> {resultado ? `${resultado}`: ''}</Text>
    </View>
  )
}