import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from './styles';


export default function Sobre() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 24 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Sobre nós</Text>
          <View style={{ width: '95%', height: 1, marginTop: 8, marginBottom: 8, backgroundColor: '#e0b693' }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16 }}>Somos um zoológico sediado em SP, temos animais de várias regiões e locais do mundo, incluindo animais nativos da América do Sul.</Text>
          </View>
      </View>
      <Image source={require('../../../assets/zoosp.png')} style={{width:160, height:90, position:'absolute', bottom:10, alignSelf:'center'}}/>

      <StatusBar style="auto" />
    </View>
  );
}