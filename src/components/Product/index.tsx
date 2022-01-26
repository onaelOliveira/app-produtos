import { Text, View } from "react-native";
import { Produto } from "../../types/produto";
import "./styles";

// interface Product {
//     id: number,
//     nome: string
//     quantidade: number
//     valor: number
// }

// export default function ItemProduto(produto: Produto) {
export default function ItemProduto({ id, nome, quantidade, valor }: Produto) {
    return (
        <View>

            <Text>Nome: {nome} </Text>
            <Text>Quantidade: {quantidade}</Text>
            <Text>Valor:{valor} </Text>
        </View>
    );
}