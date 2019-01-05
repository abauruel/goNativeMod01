import './src/config/ReactotronConfig';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todo from '~/components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Olá</Text>
    <Todo />
  </View>
);

export default App;
