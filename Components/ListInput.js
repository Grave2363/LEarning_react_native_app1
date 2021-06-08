import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Modal } from 'react-native';
const ListInput = props => {
    const [enteredVal, setEnteredVal] = useState('');
    const inputHandler = (text) => { setEnteredVal(text) }
    const addValHandeler = () =>{
        props.onAdd(enteredVal);
        setEnteredVal('');
    }
    return (
        <Modal visible={props.visable} animationType="slide">
        <View style={styles.container}>
        <TextInput  
        placeholder="Temp"
        style={styles.inputText} onChangeText={inputHandler}
        />
        <View style={styles.buttonBox}>
            <View style={styles.button}>
            <Button title="Add" onPress={ addValHandeler } />
            </View>
            <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
            </View>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center', 
        flex: 1,
        marginBottom: 10
    },
    buttonBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    },
    button:{
        width: '40%'
    }
});
  
export default ListInput;