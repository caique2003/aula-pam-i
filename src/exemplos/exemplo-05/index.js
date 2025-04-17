import { View, Text } from 'react-native'; 

import styles from './styles'; 

function Exemplo05() {
    return(
     <view style={styles.container}>
<Text style={styles.paragraph}> Exemplo 05</Text>

<Text style={styles.txtsáida}> Calculadora básica</Text>

<Text style={styles.txtlabel}> 1ª número </Text>
<TextInput style={styles.txtEntrada}/>

<Text style={styles.txtsáida}> + </Text>

<Text style={styles.txtlabel}> 2ª número </Text>
<TextInput style={styles.txtEntrada}/>

<Text style={[styles.txtsáida, margin:0)]}> = </Text>

        
     </view>
    );
}

export default Exemplo05;