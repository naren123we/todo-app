import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Add = ({submit}) => {
    const [text,settext]=useState('')
    const changehandle=(val)=>{
        settext(val);
    }
  return (
   <View>
    <TextInput
    style={styles.input}
        placeholder='New task...'
        onChangeText={changehandle}
    />
    <Button 
        title='Add Task'
        color='coral'
        onPress={()=>submit(text)}
    />
   </View>
  )
}
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal: 8,
       paddingVertical:6,
       borderBottomWidth:1,
       borderBottomColor: '#ddd'
    },
    })

export default Add