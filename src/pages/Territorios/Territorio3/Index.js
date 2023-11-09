import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio3() {
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
            foto: 'taman.jpg',
            nome: 'Tamanduá-bandeira',
            descricao: 'O tamanduá-bandeira, também chamado bandeira, bandurra, iurumi, jurumi, jurumim, tamanduá-açu, tamanduá-cavalo, papa-formigas-gigante e urso-formigueiro-gigante, é uma espécie de mamífero xenartro da família dos mirmecofagídeos, encontrado na América Central e na América do Sul. '
        },
        {
            foto: 'cachorromatu.jpg',
            nome: 'Cachorro-do-mato',
            descricao: 'Graxaim-do-mato, cachorro-do-mato, raposa, lobinho, lobete, rabo-fofo, guancito, fusquinho ou mata-virgem é uma espécie de canídeo endêmico da América do Sul. Habita as regiões costeiras e montanhosas, adaptando-se a altitudes até 3 000 metros acima do nível do mar.',
        },
        {
            foto: 'ursodejuju.jpg',
            nome: 'Urso-de-óculos',
            descricao: 'O urso-de-óculos, também conhecido como jukumari, urso-andino ou urso-de-lunetas constitui a única espécie vivente de urso nativa da América do Sul e é o único membro vivente da subfamília Temarctinae.'
        },
        {
            foto: 'raposacamp.jpg',
            nome: 'Raposa-do-campo',
            descricao: 'A raposa-do-campo, raposinha-do-campo, jaguamitinga ou jaguapitanga, é um canídeo endêmico do Brasil, que habita os campos e cerrados em uma área de distribuição que inclui o Mato Grosso, Mato Grosso do Sul, Goiás, Minas Gerais e São Paulo, partes do Tocantins, Bahia, e uma pequena área entre Piauí, Ceará e Paraíba.'
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
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo3.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
                                <View style={styles.imagemAnimal}>
                                    <ImageBackground resizeMode='cover' source={require(('../../../../assets/' + animal.foto))} style={{ flex: 1 }} />
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
