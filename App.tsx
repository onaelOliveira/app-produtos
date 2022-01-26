import { StyleSheet, Text, View } from 'react-native';
import ListaProdutos from './src/components/ListaProdutos';

export default function App() {
  return (
    <View >
        <Text style={styles.header} >Lista de produtos</Text>
        <ListaProdutos />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
});
