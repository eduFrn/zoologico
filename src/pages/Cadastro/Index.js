import { StatusBar } from 'expo-status-bar';

import { Animated, Text, View, TextInput, Image, ImageBackground, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useRef } from 'react';

import styles from './styles';



export default function Cadastro() {

    const fadeAnim = useRef(new Animated.Value(1)).current;


    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 750,
          useNativeDriver:false
        }).start();
      };

    
    fadeOut();

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirm, setConfirm] = useState('');

    const [msg, setMsg] = useState('');
    const [visivel, setVisivel] = useState(false);

    useEffect(
        () => {
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
            })
        }, [navigation]
    );

    function cadastro(){
        if(nome =='' || email=='' || senha=='' || confirm==''){
            setMsg("Ops, parece que você esqueceu de preencher algum campo.");
            setVisivel(true);
        }else if(senha.length<5){
            setMsg("Ops, a senha precisa ter 5 caracteres ou mais.");
            setVisivel(true);
        }else if(senha!=confirm){
            setMsg("Ops, parece que as duas senhas não batem.");
            setVisivel(true);
        }else{
            navigation.navigate("Home");
            gravar();
        }
    }

    function gravar(){
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
    }


    return (
        <View style={styles.container}>

        <Animated.View style={{position:'absolute', flex:1, backgroundColor:'white', width:'100%', height:'100%', top:0, left:0, zIndex:fadeAnim, opacity:fadeAnim}}/>
            
        <ImageBackground resizeMode='cover' source={require('../../../assets/fundo.jpg')} style={{width:'100%', height:'100%', position:'absolute',}}/>
            
            <View style={{ backgroundColor: '#ffedde', borderRadius: 10, height:320, width: '70%', padding: 8 }}>
                <View style={{ flex: 1, textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <Image source={require('../../../assets/zoosp.png')} style={{width:87, height:50, alignSelf:'center'}}/>
                </View>
                <View style={{ width:'90%', alignSelf:'center', height: 1, marginTop:8, marginBottom:8, backgroundColor: '#e0b693' }} />
                <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', padding:4}}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            autoComplete='name'
                            style={styles.input}
                            placeholder="Nome completo"
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            autoComplete='email'
                            keyboardType='email-address'
                            style={styles.input}
                            placeholder="E-mail"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            autoComplete='password'
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Senha"
                            value={senha}
                            onChangeText={text => setSenha(text)}
                        />
                    </View>
                   <View style={{ flex: 1 }}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Confirmar a senha"
                            value={confirm}
                            onChangeText={text => setConfirm(text)}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => cadastro()} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', fontFamily:'Century Gothic', fontWeight:'bold'}}>
                            CADASTRAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={visivel} animationType="none" transparent={true} onRequestClose={() => setVisivel(false)}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#000000cc',
                }}
                    onPressIn={() => setVisivel(false)}>
                    <TouchableWithoutFeedback>
                        <View style={{ width: '60%', height: 150, padding: 10, backgroundColor: '#ffedde', borderRadius: 10 }}>
                            <View style={{flex:2}}>
                                <Text style={{textAlign:'center', fontWeight:'bold'}}>
                                    OPS!
                                </Text>
                                <View style={{ width:'90%', alignSelf:'center', height: 1, marginTop:8, marginBottom:8, backgroundColor: '#e0b693' }} />
                                <Text style={{textAlign:'center', fontFamily:'Century Gothic', fontSize:13}}>
                                    {msg}
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => setVisivel(false)} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', fontFamily:'Century Gothic', fontWeight:'bold'}}>
                                        VOLTAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </TouchableOpacity>
            </Modal>


            <StatusBar style="auto" />
        </View>

    );
}
