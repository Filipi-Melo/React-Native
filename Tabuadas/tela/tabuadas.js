import { Text, View } from 'react-native';
import Styles from '../estilos'

export default function gerarTabuada(numero){
  let tabuada=''
  for (i=1; i<=10; i++) tabuada += numero + ' X '+i+ ' = ' + numero*i + '\n\n'
  return [
   <View stlye={Styles.container}>
    <Text style={Styles.paragraph}>{tabuada}</Text>
   </View>
  ];
}