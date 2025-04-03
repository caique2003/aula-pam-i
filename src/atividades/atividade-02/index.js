import { View, Text, Card, } from 'react-native'; 

import styles from './styles';

import  motoCinza  from '../../../../assets/moto cinza.png'; 
import motoPreta from '../../../../assets/moto preta.png'; 
import motoVermelha from '../../../../assets/moto vermelha.png'; 
import motoAzul from '../../../../assets/moto azul.png'; 

import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>            
         
            <Card 
                titulo={'moto cinza'} 
                descricao={'honda cinza 2018'} r
                valor={'15.999'}
                img={motoCinza}
            />
       
            <Card 
                titulo={'moto preta'} 
                descricao={'honda preta 2021'} 
                valor={'16.000'}
                img={motoPreta}
            />
            <Card 
                titulo={'moto vermelha'} 
                descricao={'honda vermelha 2022'} 
                valor={'16.500'}
                img={motoVermelha}
            />

            <Card 
            titulo={'moto preta'} 
            descricao={'honda preta 2021'} 
            valor={'16.000'}
            img={motoAzul}
            />
        </View>
    );
}

export default Atividade02