import { StatusBar } from 'expo-status-bar';
import { Animated, Text, View, ImageBackground, Image, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 750,
          useNativeDriver:false
        }).start();
      };
    
    fadeOut();

    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    <Image source={require('../../../assets/menu.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            ),
        })
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
    }, [navigation]
    );


    function navegar(nome){
        setVisivel(false);
        navigation.navigate(nome);
    }

    return (

        <View style={styles.container}>

            <Animated.View style={{position:'absolute', flex:1, backgroundColor:'white', width:'100%', height:'100%', top:0, left:0, zIndex:fadeAnim, opacity:fadeAnim}}/>

            <View style={{ flex: 1, width: '92%' }}>
                <ScrollView
                    scrollEnabled={!visivel}
                    nestedScrollEnabled={!visivel}
                >
                    <TouchableOpacity onPress={() => navigation.navigate('Território 1')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/1.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Território 2')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/2.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Território 3')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/3.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Território 4')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/4.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Território 5')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/5.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Território 6')} style={styles.territorio}>
                        <ImageBackground resizeMode='cover' source={require('../../../assets/6.jpg')} style={{ flex: 1 }} />
                        <Text style={styles.textoTerritorio}>Território 6</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <Modal visible={visivel} animationType="fade" transparent={true} onRequestClose={() => setVisivel(false)}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#000000cc',
                    }}
                    onPressIn={() => setVisivel(false)}>
                    <TouchableWithoutFeedback>
                        <View style={{ width: '80%', height: '70%', padding: 10, backgroundColor: '#ffedde', borderRadius: 10 }}>
                            <View style={{ flex: 1, textAlign: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#e0b693' }} />
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',  }}>Menu</Text>
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#e0b693' }} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                                <View style={{ flex: 1, padding: 5, flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => navegar("Usuário")}>
                                        <Image source={require('../../../assets/user.png')} style={{ width: 75, height: 75, borderRadius: 20, alignSelf:'center'}} />
                                        <Text style={{ textAlign: 'center',  fontWeight:'bold' }}>Conta</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navegar("Sobre")}>
                                        <Image source={require('../../../assets/book.png')} style={{ width: 75, height: 75, borderRadius: 20, alignSelf:'center' }} />
                                        <Text style={{ textAlign: 'center',  fontWeight:'bold' }}>Sobre</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => setVisivel(false)} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'white',  fontWeight:'bold'}}>
                                        VOLTAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
            <Image source={require('../../../assets/bush.png')} resizeMode="cover" style={{ width: '100%', height: 50, position:'absolute', bottom:0}} />

            <StatusBar style="auto" />
        </View>
    );
}