import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
    },
   
    imagem: {
        //height: RFPercentage(16),
        //width:  RFPercentage(48),
        width: '90%',
        resizeMode: 'contain',
    },
});

export default styles;