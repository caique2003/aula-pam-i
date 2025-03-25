import { View, Text, Image} from 'react-native'; 

import styles from './styles'; 
import img from '../../../assets/OIP.png';

import atividade from './atividade02';

function atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade02</Text>
        <Image source={img} style={styles.imagem}/>
        

        </View>
    );
}

export default atividade02;