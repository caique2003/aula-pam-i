import React from 'react'; 
import { View, Text } from "react-native"; 
import styles from "./styles"; // Verifique se o caminho do arquivo está correto

function Mensagem({titulo, children}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{children}</Text>
        </View>
    );
}

export default Mensagem;
