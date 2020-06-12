import React, {Component} from "react";
import { View, Text,StyleSheet, Platform } from "react-native";
import Button from './src/components/Button'
import Display from './src/components/Display'


export default class App extends Component {
  state = {
    displayValue: '0'
  }
  
  render(){
  return (
    <View style={{flex: 1,}}>
      <Display value={this.state.displayValue} />

      <View style={styles.buttons}>        
        <Button label='AC' />
        <Button label='/' />
        <Button label='7' />
        <Button label='8' />
        <Button label='9' />
        <Button label='*' />
        <Button label='4' />
        <Button label='5' />
        <Button label='6' />
        <Button label='-' />
        <Button label='1' />
        <Button label='2' />
        <Button label='3' />
        <Button label='+' />
        <Button label='0' />
        <Button label='.' />
        <Button label='=' />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})