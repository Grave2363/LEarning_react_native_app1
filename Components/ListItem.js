import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ListItem = props => {
    return (
    <TouchableOpacity onPress={props.delete.bind(this, props.id)}>
        <View style={styles.listI}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listI:{
      padding: 5,
      marginVertical: 15,
      backgroundColor: '#ccc',
      borderColor: 'red',
      borderWidth: 2
    }
  });
  
export default ListItem;