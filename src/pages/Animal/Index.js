import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated, Image, ImageBackground, ScrollView } from 'react-native';
import { useRef } from 'react'
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Animal() {
    const navigation = useNavigation();
    const route = useRoute();

    const linha = useRef(new Animated.Value(0)).current;

    const crescerLinha = () => {
        Animated.timing(linha, {
            toValue: 270,
            duration: 1000,
            useNativeDriver: false
        }).start();

    };
    crescerLinha();

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false

        }).start();
    };

    fadeOut();

    return (
        <View style={styles.container}>

            <Animated.View style={{ position: 'absolute', flex: 1, backgroundColor: '#ffedde', width: '100%', height: '100%', top: 0, left: 0, zIndex: fadeAnim, opacity: fadeAnim }} />

            <View style={{ flex: 1, justifyContent: "center" }}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ height: 200, backgroundColor: 'red', overflow: 'hidden' }}>
                        <ImageBackground resizeMode="cover" source={require("../../../assets/" + route.params?.foto)} blurRadius={2} style={{ flex: 1, justifyContent: 'center', transform: [{ scale: 1.05 }] }}>
                            <View style={{ width: '100%', height: '100%', zIndex: -1, backgroundColor: 'rgba(0,0,0,0.8)', position: 'absolute' }} />
                            <Image style={{ borderRadius: 80, width: 160, height: 160, alignSelf: 'center' }} resizeMode='cover' source={require('../../../assets/' + route.params?.foto)} />
                        </ImageBackground>
                    </View>
                    <View style={{flex:5}}>
                        <View style={{ flex: 4, padding: 32 }}>
                            <View>
                                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                    {route.params?.nome}
                                </Text>
                            </View>
                            <Animated.View style={{ width: linha, alignSelf: 'center', height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#e0b693' }} />
                            <View>
                                <Text style={{ fontSize: 14 }}>
                                    {route.params?.descricao}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                                    Voltar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
            <Image source={require("../../../assets/" + route.params?.fundo)} resizeMode="cover" style={{ width: '100%', height:300, position:'absolute', bottom:0, zIndex:-1, opacity:0.4}} />

            <StatusBar style="auto" />

        </View>
    );
}
