import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black', 
        padding: 10,  
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20,
        margin: 8,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 12, 
        width: '80%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
        
    }, 
  texto: {
    fontSize: RFPercentage(2.2),
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  txtSaida: {
    fontSize: 18,
    color: '#fff', // Letra branca pra destacar no fundo vermelho
    marginVertical: 10,
  },
  txtLabel: {
    fontSize: 16,
    color: '#fff', // Letra branca também
    marginBottom: 5,
  },
  txtEntrada: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15, // <- Cantos mais arredondados
    width: '100%',
    backgroundColor: '#fff',
    color: '#000', // Texto preto dentro da caixa branca
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  textButton: {
    color: 'red', // Combina com o fundo agora
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
