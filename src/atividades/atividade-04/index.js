import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade04() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');

  return (


    <View style={styles.container}>
          <Text style={styles.titulo}>Atividade 04</Text>


      <TextInput
        style={styles.txtInput}
        placeholder="Nome"
        onChangeText={(valorNome) => setNome(valorNome)}
      />

      <TextInput
        style={styles.txtInput}
        placeholder="Sobrenome"
        onChangeText={(valorSobrenome) => setSobrenome(valorSobrenome)}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setNomeCompleto(`${nome} ${sobrenome}`)}
      >
        <Text style={styles.txtBotao}>Exibir texto</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nomeCompleto}</Text>
    </View>
  );
}

export default Atividade04;
