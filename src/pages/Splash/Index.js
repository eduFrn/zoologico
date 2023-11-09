import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
    
import styles from './styles';

export default function Splash() {

    const navigation = useNavigation();

    if(localStorage.getItem('nome') != null && localStorage.getItem('email')!=null && localStorage.getItem('senha')!=null && localStorage.getItem('sexo')!=null){
        setTimeout(() => navigation.navigate("Home"), 1000);
    }else{
        setTimeout(() => navigation.navigate("Cadastro"), 1000);
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={require('../../../assets/loading-squirrel.gif')} resizeMode="contain" style={{ width: 200, height: 200 }} />
            </View>
            <Image source={require('../../../assets/bush.png')} resizeMode="cover" style={{ width: '100%', height: 50, position:'absolute', bottom:0}} />
            <StatusBar style="auto" />
        </View>
    );
}