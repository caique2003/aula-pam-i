import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo05() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  const somar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      setTotal((n1 + n2).toString());
    } else {
      setTotal('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 05</Text>

      <Text style={styles.txtSaida}>Calculadora básica</Text>

      <Text style={styles.txtLabel}>1º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.txtLabel}>2º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

      <Text style={styles.txtLabel}>Total</Text>
      <TextInput
        style={styles.txtEntrada}
        value={total}
        editable={false}
      />

      <TouchableOpacity style={styles.button} onPress={somar}>
        <Text style={styles.textButton}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Exemplo05;
