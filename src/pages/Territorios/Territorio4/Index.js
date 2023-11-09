import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRef } from 'react';

import styles from './styles';

export default function Territorio4() {
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
            foto: 'rhino.png',
            nome: 'Rinoceronte',
            descricao: 'Rinocerontes são mamíferos herbívoros encontrados na África e Ásia que apresentam pele grossa e cornos muito visados comercialmente. O termo rinoceronte é usado para se referir a cinco espécies distintas: rinoceronte-branco, rinoceronte-negro, rinoceronte-indiano, rinoceronte-de-sumatra e  rinoceronte-de-java. Das espécies conhecidas, três estão classificadas como “criticamente em perigo”, o que nos mostra a necessidade de preservação desses animais.'
        },
        {
            foto: 'girafa.jpg',
            nome: 'Girafa',
            descricao: 'As girafas são mamíferos nativos do continente africano. Algumas das características mais marcantes desses animais é a sua altura e o seu padrão de coloração, com manchas marrons características. São animais herbívoros (só se alimentam de vegetais) que apresentam como um de seus alimentos preferidos as plantas conhecidas como acácias. Geralmente as fêmeas dão à luz um único filhote.\n\nAtualmente essa espécie é classificada como vulnerável pela Lista Vermelha de Espécies Ameaçadas da IUCN, e a tendência populacional é a redução do número de indivíduos. A perda de habitat e a caça ilegal são algumas das ameaças a esses animais.',
        },
        {
            foto: 'casuar.jpg',
            nome: 'Casuar',
            descricao: 'O casuar (Casuarius spp.) é uma ave do grupo das aves ratitas de grande porte, nativas do nordeste da Austrália, Nova Guiné e ilhas circundantes. São aves curiosas que costumam imitar movimentos de humanos depois de observá-los atentamente, embora não sejam muito amigáveis ou domesticáveis. As três espécies de casuar existentes pertencem à família Casuariidae e são juntamente com o avestruz, a ema, o avestruz-somali e o emu as maiores aves existentes na atualidade.'
        },
        {
            foto: 'suricata.jpg',
            nome: 'Suricata',
            descricao: 'O suricata (Suricata suricatta), também conhecida como suricate ou suricato, é uma espécie de mamífero da família Herpestidae. É a única espécie descrita para o gênero Suricata. Pode ser encontrada na África do Sul, Botsuana, Namíbia e Angola. Estes animais têm cerca de meio metro de comprimento (incluindo a cauda), em média 730 gramas de peso, e pelagem acastanhada. Os suricatas alimentam-se de pequenos artrópodes, principalmente escaravelhos e aranhas.'
        },
        {
            foto: 'dromedario.jpg',
            nome: 'Dromedário',
            descricao: 'O dromedário, camelo-doméstico ou camelo-árabe (Camelus dromedarius) é um animal mamífero nativo da região nordeste da África e da parte ocidental da Ásia, pertencente à família Camelidae, sendo uma das duas espécies de camelos.'
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
                            <TouchableOpacity style={styles.animal} onPress={() => navigation.navigate('Animal', { fundo: "fundo4.png", foto: animal.foto, nome: animal.nome, descricao: animal.descricao })} key={animal.nome}>
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
