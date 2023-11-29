import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const handlePress = () => {
    setCount(count + 1);
    setData([...data, `Item ${count + 1}`]);
  };

  const handleRemove = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.pop();
      setData(newData);
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRemove} disabled={data.length === 0}>
        <Text style={[styles.buttonText, { color: data.length === 0 ? 'gray' : 'white' }]}>
          Remover Último Item
        </Text>
      </TouchableOpacity>

      {data.length === 0 ? (
        <Text style={styles.message}>Adicione uma nova lista</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  message: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default App;
