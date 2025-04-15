import { View, Text } from 'react-native'; 

import styles from './styles';

import MotoAzul from '../../../assets/moto azul.jpg'; 
import Motovermelha from '../../../assets/moto vermelha.jpg'; 
import MotoPreta from '../../../assets/moto preta.jpg'; 
import MotoListrada from '../../../assets/moto cinza.jpg'; 

import Card from './Card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>            

            <Card 
                titulo={'HONDA 2020'} 
                descricao={'Moto Azul Honda 150 Km/h'} 
                valor={'15.000'}
                img={MotoAzul}
            />
            <Card 
                titulo={'HONDA 2021'} 
                descricao={'Moto Vermelha  Honda 150 Km/h'} 
                valor={'15.900'}
                img={Motovermelha}
            />
            <Card 
                titulo={'HONDA 2018'} 
                descricao={'Moto preta Honda 150 Km/h'} 
                valor={'15.000'}
                img={MotoPreta}
            />
            <Card 
                titulo={'HONDA 2022'} 
                descricao={'Moto Preta Honda Km/h'} 
                valor={'16.999'}
                img={MotoListrada}
            />

        </View>
    );
}

export default Atividade02;