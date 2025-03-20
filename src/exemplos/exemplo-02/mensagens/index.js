import {View, Text} from 'react-native';
import styles from './styles';

function Mensagem(){
   return(
    <View style={styles.container}>
        <Text style={styles.título}>Título</Text>
        <Text style={styles.Mensagem}>Mensagem</Text>
    </View>
   );

}
export default Mensagem;