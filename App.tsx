import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ItemProduto from './src/components/Product';
import { Produto } from './src/types/produto';

// interface Product {
//   id: number,
//   nome: string
//   quantidade: number
//   valor: number
// }

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>();

  useEffect(() => {
    axios.get('https://produtos-marcos.herokuapp.com/api/produtos').then(response => {
      setProdutos(response.data);
    })
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        data={produtos}

        renderItem={({ item }) => (
          <View>
            <ItemProduto
              id={item.id}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
