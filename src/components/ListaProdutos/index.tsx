import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView, VirtualizedList } from 'react-native';
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
        <ScrollView style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <ScrollView>
                        <ItemProduto
                            id={item.id}
                            nome={item.nome}
                            quantidade={item.quantidade}
                            valor={item.valor}
                        />
                    </ScrollView>
                )}
            />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30
    }
});
