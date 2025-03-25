
import { View, Text } from "react-native";

import styles from "./styles";

function Mensagem({titulo, mensagem}){
    return(
        <View style={styles.container}> 
        <Text style={styles.titulo}>{titulo}Título</Text>
        <Text style={styles.mensagem}>{children}Mensagem</Text>
        </View>
    );
}

export default Mensagem;