 
import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando campo Minado</Text>
          <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
          </Text>
          <Field />
          <Field opened nearMines={3}/>
          <Field mined/>
          <Field mined opened/>
          <Field mined opened exploded/>
          <Field flagged/>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin:10,
  },
  instructions:{
    fontSize: 15,
    textAlign: 'center',
    margin:10,
  }
})