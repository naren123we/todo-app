import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Task from './components/Task';
import Add from './components/Add';
import { TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [task, settask] = useState([
    { text: "Buy Coffee", key: '1' },
    { text: "Buy tea", key: '2' },
    { text: "create app", key: '3' },
  ])
  const presshandle = (key) => {
    settask((prev) => {
      return prev.filter(task => task.key != key);
    })
  }
  const submit = (text) => {
    if (text.length > 3) {
      settask((prev) => {
        return [...prev, { text: text, key: (task.length+1).toString() }]
      })
    }
    else {
      Alert.alert('OOPS!', 'Task must be over 3 letters long', [
        { text: 'Understood', onPress: () => console.log('closed') }
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          <Add submit={submit} />
          <View style={styles.list}>
            <FlatList
              data={task}
              renderItem={({ item }) => (
                <Task item={item} presshandle={presshandle} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,

  },
  list: {
    flex:1,
    marginTop: 20,
  },
});
