import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio2() {
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
            foto: 'quati.jpg',
            nome: 'Quati',
            descricao: 'O quati é um mamífero da ordem Carnivora, da família Procyonidae e do gênero Nasua. O grupo está distribuído desde o Arizona até o norte da Argentina, possuindo três espécies: Nasua nasua, Nasua narica e Nasua nelsoni. Este animal também é conhecido por seu nome popular "Tamanduá Palito". vive em bando.',
        },
        {
            foto: 'micoleao2.jpg',
            nome: 'Mico-leão-dourado',
            descricao: 'O mico-leão-dourado é um primata endêmico do Brasil, da família Callitrichidae e gênero Leontopithecus. Ocorre exclusivamente na Mata Atlântica brasileira, no estado do Rio de Janeiro, mas alguns autores já consideraram sua ocorrência no sul do Espírito Santo.'
        },
        {
            foto: 'bugio.jpg',
            nome: 'Bugio-preto ',
            descricao: 'O bugio-preto, guariba-preto, bugio-do-pantanal ou carajá é uma espécie de primata do gênero bugio que habita florestas tropicais e savanas do sudoeste e centro do Brasil, nordeste da Argentina, leste da Bolívia e do Paraguai e, provavelmente, do extremo noroeste do Uruguai.'
        },
        {
            foto: 'papa2.jpg',
            nome: 'Papagaio-da-várzea',
            descricao: 'O papagaio-da-vázea, também conhecido como papa-cacau, é uma espécie de papagaio que é encontrada na região norte do Brasil e em países vizinhos. Tais aves chegam a medir até 35 cm de comprimento, possuindo uma plumagem da fronte e dos loros vermelho-escura e mancha azul atrás dos olhos.',
        },
        {
            foto: 'tucano.jpg',
            nome: 'Tucano-Toco',
            descricao: 'Ramphastos toco, popularmente conhecido como tucanuçu, tucanaçu, tucano-grande e tucano-boi, é uma espécie de tucano e o maior representante da família Ramphastidae.'
        }
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
                        //função .map pra exibir um TouchableOpacity para cada animal/objeto daquela matriz.
                        //também dá pra usar o componente FlatList, eu usei esse não sei o porquê.
                        animais.map((animal) => (
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo2.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
                                <View style={styles.imagemAnimal}>
                                    <ImageBackground resizeMode='cover' source={(require('../../../../assets/' + animal.foto))} style={{ flex: 1 }} />
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
