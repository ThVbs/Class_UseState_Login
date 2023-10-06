import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E25',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

        paddingBottom: 10,
    },

    input: {
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 5,
        fontWeight: '200',

        width: '60%',
        margin: 10,
        padding: 10,
    },

    btn: {
        backgroundColor: 'red',
        fontSize: 14,
        width: '60%',

        margin: 10,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,

        alignItems: "center",
    },

    btnTxT: {
        color: 'white',
        fontFamily: "Arial",
        fontWeight: '600',

    },

    text: {
        color: "#fff",
        fontSize: 10,
        width: '60%',
    },
    itemContainer: {

        backgroundColor: '#78787c',
        borderRadius: 5,
        width: '60%',
        margin: 10,
        padding: 30,

    },

    itemText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '200',
    },

});