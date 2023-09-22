import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'


export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome Completo'
            />

            <TextInput
                style={styles.input}
                placeholder='Data de Nascimento'
            />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxT}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}