import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Task = ({item, presshandle}) => {
  return (
    <TouchableOpacity onPress={()=>{presshandle(item.key)}}>
    <View style={styles.item}>
    <MaterialIcons name="delete" color="black" size={18} />
    <Text >{item.text}</Text>
    </View>
        
        
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    item:{
        marginTop:15,
        padding: 15,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    })
export default Task