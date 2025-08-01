import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba Um</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Image source={require('@/assets/images/images.png')} style={styles.image} />

      /* Formulário */
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        placeholder="CPF"
        inputMode="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        placeholder="Telefone"
        inputMode="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        placeholder="E-mail"
        inputMode="email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="ENVIAR"  onPress={() => { alert(nome + ' ' + sobrenome + ' ' + cpf + ' ' + telefone + ' ' + email) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
