import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [text, setText] = useState<string>("")


  return (
    <View style={styles.container}>
      <Text>ХУЙ</Text>
      <StatusBar style="auto" />
      <Button title='Нажми' onPress={() => {}}></Button>
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
