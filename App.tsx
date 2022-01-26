import { StyleSheet, Text, View } from 'react-native';
import ListaProdutos from './src/components/ListaProdutos';

export default function App() {
  return (
    <View >
        <Text style={styles.header} >Lista de produtos</Text>
        <Text >
          <ListaProdutos />
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 20,
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 25, 
  },
});