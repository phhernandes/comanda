import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  style={styles.imagem} source={require('./assets/buerger.jpg')}/>
      <Text>Sistema</Text>
      <Text style={styles.titulo}>Comanda</Text>
      <TextInput style={styles.input} placeholder='e-mail' />
      <TextInput style={styles.input} placeholder='senha' secureTextEntry />
      <Text style={styles.botao}>entrar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#121A2C',
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    borderColor: "#747474",
    borderWidth: 1,
    marginVertical: 10,
  },
  botao:{
    color:'#ffba26',
    backgroundColor: '#121a2c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  imagem:{
    width: '100%',
    height: 200,
    position: "absolute",
    top: 0,
  }
});
