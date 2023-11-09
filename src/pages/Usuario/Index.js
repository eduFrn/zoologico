import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import { useState } from 'react';

export default function Usuario() {
    const navigation = useNavigation();

    const primeiroNome = localStorage.getItem('nome').split(' ')[0];

    const [nome, setNome] = useState(localStorage.getItem('nome'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [senha, setSenha] = useState('');

    var senhaUser = '';

    for (var i = 0; i < localStorage.getItem('senha').length; i++) {
        if (i == 0) {
            senhaUser += localStorage.getItem('senha')[0]
        } else if (i == localStorage.getItem('senha').length - 1) {
            senhaUser += localStorage.getItem('senha')[i]
        } else {
            senhaUser += '*';
        }
    }

    const [visivel, setVisivel] = useState(false);
    const [visivelErro, setVisivelErro] = useState(false);

    const [msg, setMsg] = useState('');

    function confirmarAlteracoes() {
        if (nome == '' || email == '' || senha == '') {
            setMsg("Ops, parece que você esqueceu de preencher algum campo.");
            setVisivelErro(true);
        } else {
            gravar();
            setVisivel(false);
        }
    }
    function gravar() {
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, width: '100%' }}>
                <View style={{ padding: 24 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Olá, {primeiroNome}.</Text>
                    <View style={{ width: '95%', height: 1, marginTop: 8, marginBottom: 8, backgroundColor: '#e0b693' }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dados pessoais:{'\n\n'}</Text>
                        <Text style={{ fontSize: 16 }}>Nome: {localStorage.getItem('nome')}</Text>
                        <Text style={{ fontSize: 16 }}>E-mail: {localStorage.getItem('email')}</Text>
                        <Text style={{ fontSize: 16 }}>Senha: {senhaUser}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setVisivel(true)} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', fontFamily: 'Century Gothic', fontWeight: 'bold' }}>
                        ALTERAR DADOS
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal visible={visivel} animationType="fade" transparent={true} onRequestClose={() => setVisivel(false)}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#000000cc',
                }}
                    onPressIn={() => setVisivel(false)}>
                    <TouchableWithoutFeedback>
                        <View style={{ width: '60%', height: 320, padding: 10, backgroundColor: '#ffedde', borderRadius: 10 }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    Alterar dados
                                </Text>
                                <View style={{ width: '90%', alignSelf: 'center', height: 1, marginTop: 8, marginBottom: 8, backgroundColor: '#e0b693' }} />
                                <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
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
                                            onChangeText={text => setSenha(text)}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => confirmarAlteracoes()} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', fontFamily: 'Century Gothic', fontWeight: 'bold' }}>
                                            ALTERAR
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => setVisivel(false)} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', fontFamily: 'Century Gothic', fontWeight: 'bold' }}>
                                            VOLTAR
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>

            <Modal visible={visivelErro} animationType="fade" transparent={true} onRequestClose={() => setVisivelErro(false)}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#000000cc',
                }}
                    onPressIn={() => setVisivelErro(false)}>
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
                                <TouchableOpacity onPress={() => setVisivelErro(false)} style={{ width: 100, backgroundColor: '#e13231', padding: 5, borderRadius: 20, alignSelf: 'center' }}>
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
