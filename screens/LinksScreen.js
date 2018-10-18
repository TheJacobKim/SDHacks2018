import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style = {styles.title}>
          Trash Members
        </Text>
        <TextInput
          style={{height: 50}}
          placeholder="Enter Trash Member:"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 50}}
          placeholder="Enter Trash Member:"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 50}}
          placeholder="Enter Trash Member:"
          onChangeText={(text) => this.setState({text})}
        />
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 30,
    //fontFamily: 'futura',
  },
});
