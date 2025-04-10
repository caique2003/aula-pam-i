import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importando estilos

function Contador() {
  const [contador, setContador] = useState(0);

  // Funções para manipular o contador
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const zerar = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>{contador}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={incrementar}>
          <Text style={styles.textoBotao}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={decrementar}>
          <Text style={styles.textoBotao}>Decrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={zerar}>
          <Text style={styles.textoBotao}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Contador;
