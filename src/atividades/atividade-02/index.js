import { View, Text } from 'react-native'; 

import styles from './styles'; 

function atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade02</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
        </View>
    );
}

export default atividade02;