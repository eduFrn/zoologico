import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio1() {
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
            foto: 'oncapintada.jpg',
            nome: 'Onça-pintada',
            descricao: 'A onça-pintada é o maior felino do continente americano, podendo chegar a 135 kg. É um animal robusto, com grande força muscular, sendo a potência de sua mordida considerada a maior dentre os felinos de todo o mundo.\n\nSuas presas naturais são animais silvestres como catetos, capivaras, jacarés, queixadas, veados e tatus. Outra característica marcante dessa espécie é que ela não mia como a maioria dos felinos. Assim como o Leão, o Tigre e o Leopardo, ela emite uma série de roncos muito fortes que são chamados de esturro.',
        },
        {
            foto: 'cisnepreto.jpg',
            nome: 'Cisne-negro',
            descricao: 'O cisne-negro ou cisne-preto é uma ave aquática australiana, pertencente à família Anatidae, a mesma família dos patos, gansos, e demais cisnes. É a ave oficial do estado da Austrália Ocidental.\n\nPodem-se encontrar em todos os estados da Austrália. Na Europa, foi introduzida acidentalmente e tem populações auto-suficientes na Grã-Bretanha, Islândia, Polónia e Países Baixos. O animal adulto pode pesar até 9 kg.'
        },
        {
            foto: 'elefante.jpg',
            nome: 'Elefante',
            descricao: 'O elefante é um mamífero que se destaca pelo seu grande porte, longa tromba e presença de presas muito cobiçadas comercialmente. São animais herbívoros que se alimentam de enorme quantidade de vegetal todos os dias, podendo ingerir mais de 100 kg de alimento diariamente.\n\nOs elefantes fazem parte da ordem Proboscidea e família Elephantidae. Atualmente, são reconhecidas três espécies, sendo dois elefantes africanos e um elefante asiático, as quais estão em risco de extinção.',
        },
        {
            foto: 'jaguatirica.jpg',
            nome: 'Jaguatirica',
            descricao: 'A jaguatirica, também conhecida como ocelote, é uma espécie de mamífero carnívoro pertencente à família dos felídeos, sendo um dos dez representantes do gênero Leopardus.\n\nSão reconhecidas dez subespécies, com o gato-maracajá (L. wiedii) sendo a espécie mais próxima da jaguatirica. Ocorre desde o sul dos Estados Unidos até o norte da Argentina, mas já foi extinta em algumas regiões de sua distribuição geográfica.'
        },
        {
            foto: 'serval.jpg',
            nome: 'Serval',
            descricao: 'O serval é um mamífero carnívoro da família dos felídeos. Mede cerca de 85 cm, mais 40 cm de cauda.\n\nSão felinos de porte médio, sendo que em seu habitat são menores do que felinos de grande porte como as panteras e guepardos mas maiores do que felinos de pequeno porte como os gatos selvagens africanos.'
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
                        
                        animais.map((animal) => (
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo1.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
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
