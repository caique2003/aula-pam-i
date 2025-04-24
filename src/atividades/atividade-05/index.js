import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade05() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const operar = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Erro: entrada inválida!');
      return;
    }

    let total;
    switch (operacao) {
      case '+':
        total = n1 + n2;
        break;
      case '-':
        total = n1 - n2;
        break;
      case '*':
        total = n1 * n2;
        break;
      case '/':
        total = n2 !== 0 ? n1 / n2 : 'Erro: divisão por zero';
        break;
      default:
        total = 'Operação inválida';
    }

    setResultado(total.toString());
  };

  const limpar = () => {
    setNum1('');
    setNum2('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 05</Text>
      <Text style={styles.txtSaida}>Calculadora básica</Text>

      <Text style={styles.txtLabel}>1º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <Text style={styles.txtLabel}>2º número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => operar('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => operar('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => operar('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => operar('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={limpar}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>Resultado: {resultado}</Text>
    </View>
  );
}

export default Atividade05;
