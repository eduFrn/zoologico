import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio5() {
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
            foto: 'uruburei.jpg',
            nome: 'Urubu-rei',
            descricao: 'O urubu-rei, também designado como urubu-real, urubutinga, corvo-branco, urubu-branco, urubu-rubixá ou iriburubixá, é uma ave acipitriforme da família dos catartídeos. Habitante de zonas tropicais a semitropicais, desde o México à Argentina.'
        },
        {
            foto: 'condor.jpg',
            nome: 'Condor-dos-andes',
            descricao: 'O condor (Vultur gryphus) é uma ave da família dos catartídeos, parente próximo do condor-da-califórnia e dos urubus, que habita a Cordilheira Andina, na América do Sul.\n\nOs condores, assim como os urubus, apesar de serem conhecidos também por abutres-do-novo-mundo são, segundo a nova Taxonomia de Sibley-Ahlquist, mais próximos às cegonhas do que aos abutres propriamente ditos.\n\nEle é o símbolo nacional da Colômbia, Equador, Bolívia e Chile e integra os brasões oficiais destes países, além de cumprir um importante papel no folclore e na mitologia das regiões andinas da América do Sul. '
        },
        {
            foto: 'mochodiabo.jpg',
            nome: 'Mocho-diabo',
            descricao: 'O mocho-diabo é uma coruja grande e discreta; ocorre em grande parte da América do Sul e Central, habitando uma ampla variedade de habitats, mas geralmente prefere matas abertas, como florestas decíduas, florestas de pinheiros, cerrado, campos com árvores esparsas, e até mesmo em parques urbanos.\n\n A dieta da espécie inclui roedores, morcegos e aves, desde pássaros pequenos até pombos-domésticos. O mocho-diabo, além de ter uma coloração com aspecto escuro, apresenta dois tufos de penas, bem proeminentes, que se parecem com orelhas acima da cabeça. Conhecida também como coruja-diabo e mocho-escuro.'
        },
        {
            foto: 'corujasuindara.jpg',
            nome: 'Coruja suindara',
            descricao: 'Tytonidae é uma das duas famílias de aves que inclui diversas espécies de corujas, a outra sendo a Strigidae. Elas são de tamanho médio para grande, com grandes cabeças no formato característico de "coração". As suindaras incluem duas sub-famílias: Tytoninae e Phodilinae.'
        },
        {
            foto: 'harpia.jpg',
            nome: 'Harpia',
            descricao: 'O gavião-real, também chamado cutucurim, gavião-de-penacho, harpia, uiraçu, uiracuir, uiruuetê, uraçu, águia-brasileira ou uiraçu-verdadeiro, é uma ave acipitriforme da família dos acipitrídeos. '
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
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo5.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
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
