import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles'
import { useState } from 'react'


export default function Home() {

    const [name, setName] = useState('')
    const [dateNasc, setdateNasc] = useState('')


    function handleUserAdd() {
        console.log("Nome Completo: " + name);
        console.log("Data de nascimento: " + dateNasc);

        Alert.alert("Nome Completo: " + name, "\nData de nascimento: ", + dateNasc)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome Completo'

                onChangeText={setName} // Alterar o valor
                value={name} //captura do valor
            />

            <Text style={styles.text}>{ name }</Text>

            <TextInput
                style={styles.input}
                placeholder='Data de Nascimento'
                onChangeText={setdateNasc} // Alterar o valor
                value={dateNasc} //captura do valor
            />

            <Text style={styles.text} >{ dateNasc }</Text>

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd} >
                <Text style={styles.btnTxT}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}