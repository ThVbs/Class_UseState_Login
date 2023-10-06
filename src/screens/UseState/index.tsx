import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from './styles';

interface UserData {
  id: string;
  name: string;
  dateNasc: string;
}

export default function Home() {
  const [name, setName] = useState('');
  const [dateNasc, setdateNasc] = useState('');

  const [userData, setUserData] = useState<UserData[]>([]);

  const handleUserAdd = () => {
    if (name === '' || dateNasc === '') {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    const newUser: UserData = {
      id: Math.random().toString(),
      name,
      dateNasc,
    };

    setUserData([...userData, newUser]);

    setName('');
    setdateNasc('');
  };

  const renderItem = ({ item }: { item: UserData }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nome Completo: {item.name}</Text>
      <Text style={styles.itemText}>Data de Nascimento: {item.dateNasc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os dados</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome Completo'
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder='Data de Nascimento'
        onChangeText={setdateNasc}
        value={dateNasc}
      />

      <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
        <Text style={styles.btnTxT}>Cadastrar</Text>
      </TouchableOpacity>

      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
