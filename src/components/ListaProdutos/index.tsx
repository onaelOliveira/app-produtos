import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ItemProduto from '../ItemProduct';
import { Produto } from '../../types/produto';

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>();

    useEffect(() => {
        axios.get('https://produtos-marcos.herokuapp.com/api/produtos').then(response => {
            setProdutos(response.data);
        })
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <View>
                        <ItemProduto
                            nome={item.nome}
                            quantidade={item.quantidade}
                            valor={item.valor}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
    },
});
