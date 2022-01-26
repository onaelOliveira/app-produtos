import { Text, View } from "react-native";
import { Produto } from "../../types/produto";
import { StyleSheet } from "react-native";

export default function ItemProduto({nome, quantidade, valor }: Produto) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{nome}</Text>

            <Text style={styles.label}>Quantidade:</Text>
            <Text style={styles.value}>Quantidade: {quantidade}</Text>

            <Text style={styles.label}>Valor:</Text>
            <Text style={styles.value}>Valor:{valor} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 16,
        padding: 5,
        // fontWeight: 'bold'
    },
    container: {
        marginBottom: 15,
        backgroundColor: '#ccc',
        margin: 10,
        borderRadius: 10,
        marginTop: 25
    }
})

