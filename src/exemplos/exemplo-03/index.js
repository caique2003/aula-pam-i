import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Button } from 'react-native';
import styles from './styles'; 

function Exemplo03 () {
    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }

    function handleExibeBotao() {
        Alert.alert('Alerta', 'Alguém clicou no botão!');
    }

    const handleExibeBotao2 = () => {
        Alert.alert(
            'Alerta', 
            'Alguém clicou no botão!', 
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em sim'),
                    style: 'default',
                },
                {
                    text: 'Não',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em não'),
                    style: 'default',
                },
                {
                    text: 'Cancelar',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em cancelar'),
                    style: 'default',
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Váriaveis e state </Text>
            <View style={styles.botaoAlert}></View>

            <Button
                title='Não clique'
                color='darkslategray'
                onPress={handleExibeBotao2}
            />
          
            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo03;
