import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import ListItem from './Components/ListItem'
import ListInput from './Components/ListInput'

export default function App() {


const [val, setVal] = useState([]);
const [isAddingMode, setIsAddingMode] = useState(false);
const cancelHandeler = () =>{
  setIsAddingMode(false);
}
const  addHandeler = title => {
  setVal(currentVal => [...currentVal, {id: Math.random().toString(),  value:title}]);
  setIsAddingMode(false);
};
const removeHandler = itemID => {
  setVal(currentVal => {
    return currentVal.filter((val) => val.id !== itemID);
  })
}

  return (
    <View style={styles.screen}>
      <Button title="Add New Entry" onPress={() => setIsAddingMode(true)}/>
      <ListInput onAdd={addHandeler} visable={isAddingMode} onCancel={cancelHandeler}/>
      <FlatList data={val} renderItem={itemData => <ListItem id={itemData.item.id} delete={removeHandler} title={itemData.item.value}/>
      }/>
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
  screen:
  {
    padding: 50
  },
  inputText: 
  {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 15, 
    width: '85%'
  }, 
  input: 
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  listI:{
    padding: 5,
    marginVertical: 15,
    backgroundColor: '#ccc',
    borderColor: 'red',
    borderWidth: 2
  }
});
