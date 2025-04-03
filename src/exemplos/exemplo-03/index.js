import { View, Text } from 'react-native'; 

import styles from './styles'; 

function Exemplo03 () {

    function handleExibeBotao () {
Alert.alert ('Alerta', 'Alguém clicou no botão!');
    }

    const handleExibeBotao2 =()=>{
        'Alerta',
        'Alerta', 'Alguém clicou no botão!',

[

{
    text: 'sim',
    onPress: () => Alert.alert('Mensagem', 'Clicou em sim'),
    style: 'default',
},
   
{
    text: 'não',
    onPress: () => Alert.alert('Mensagem', 'Clicou em não'),
    style: 'default',
},

{
    text: 'canceler',
    onPress: () => Alert.alert('Mensagem', 'Clicou em cancelar'),
    style: 'default',
},

]

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>Váriaveis e state </Text>
            <view style={styles.botaoAlert}></view>
            <button
            title='não clique'
            color={'darkslatergrey'}
            onPress={handleExibeBotao}

            />
          
        </View>
    );
}

export default Exemplo03;