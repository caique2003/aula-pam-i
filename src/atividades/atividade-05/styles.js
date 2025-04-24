import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  txtSaida: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  txtLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  txtEntrada: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    margin: 5,
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2c3e50',
  },
});

export default styles;
