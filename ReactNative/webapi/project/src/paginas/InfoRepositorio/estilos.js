import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: 'green',
        marginTop: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 20,
        borderRadius: 8,
        height: 44,
        width: '90%',
    }
});

export default estilos;