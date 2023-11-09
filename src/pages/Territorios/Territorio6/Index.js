import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio6() {
    const navigation = useNavigation();

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false

        }).start();
    };

    fadeOut();

    
    const animais = [
        {
            foto: 'ema.jpg',
            nome: 'Ema',
            descricao: 'Ema, também conhecida como nandu, nandu-grande, nhandu, guaripé e xuri, é uma ave da família Rheidae, nativa da América do Sul. É uma ave não voadora; e usa suas grandes asas apenas para se equilibrar enquanto corre. Os machos são os responsáveis pela incubação e o cuidado com os filhotes.'
        },
        {
            foto: 'orangotango.jpg',
            nome: 'Orangotango',
            descricao: 'O orangotango é um género de exclusivamente três espécies asiáticas de Grandes primatas. Nativo da Indonésia e da Malásia, os orangotangos são encontrados somente nas florestas tropicais do Bornéu e da Sumatra. Classificado no género Pongo, orangotangos foram considerados uma espécie única.'
        },
        {
            foto: 'muriqui.jpg',
            nome: 'Muriqui-do-sul',
            descricao: 'O muriqui-do-sul, também chamado simplesmente de mono-carvoeiro ou muriqui, é uma espécie de primata da família Atelidae e do gênero Brachyteles endêmico da Mata Atlântica brasileira. É uma das duas espécies existentes de muriqui, sendo a outra o muriqui-do-norte.'
        },
        {
            foto: 'macacopregogalego.jpg',
            nome: 'Macaco-prego-galego',
            descricao: 'O macaco-prego-dourado ou macaco-prego-galego é uma espécie de macaco-prego, um macaco do Novo Mundo da família Cebidae e gênero Sapajus. Sua identidade e linhagem eram desconhecidas até 2005, quando um espécime foi descrito, e até considerado uma espécie nova, Cebus queirozi.'
        },
    ];

    return (
        <View style={styles.container}>
            <Animated.View style={{ position: 'absolute', flex: 1, backgroundColor: '#ffedde', width: '100%', height: '100%', top: 0, left: 0, zIndex: fadeAnim, opacity: fadeAnim }} />

            <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={{ flex: 1, width: '100%', padding: 12 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Animais</Text>
                    <View style={{ width: '95%', height: 1, marginTop: 8, marginBottom: 8, backgroundColor: '#e0b693' }} />
                    <View>
                        {
                        
                        animais.map((animal) => (
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo6.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
                                <View style={styles.imagemAnimal}>
                                    <ImageBackground resizeMode='cover' source={require('../../../../assets/' + animal.foto)} style={{ flex: 1 }} />
                                </View>
                                <View style={{ flex: 1, borderLeftWidth: 1, borderColor: '#e0b693', marginLeft: '5%' }}>
                                    <Text style={styles.nomeAnimal}>{animal.nome}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
