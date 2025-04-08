import React, { useState } from 'react'; 
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from "./styles"; // Certifique-se de que o caminho do seu arquivo de estilos está correto

function Atividade03({ titulo, children }) {
    const [fontSize, setFontSize] = useState(16); // Define o tamanho inicial do texto

    const aumentarTamanho = () => {
        setFontSize(prevSize => prevSize + 2); // Aumenta o tamanho do texto
    };

    const diminuirTamanho = () => {
        setFontSize(prevSize => (prevSize > 10 ? prevSize - 2 : 10)); // Diminui o tamanho do texto, com um limite mínimo
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.titulo, { fontSize: fontSize + 2 }]}>{titulo}</Text> {/* Título com tamanho dinâmico */}
            <Text style={[styles.mensagem, { fontSize: fontSize }]}>{children}</Text> {/* Mensagem com tamanho dinâmico */}
            
            <View style={styles.buttonContainer}>
                <Button title="Aumentar Tamanho" onPress={aumentarTamanho} />
                <Button title="Diminuir Tamanho" onPress={diminuirTamanho} />
            </View>
        </View>
    );
}

export default Atividade03;
