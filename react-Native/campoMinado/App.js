 
import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import params from './src/params'

import MineField from './src/components/MineField'
import {createMinedBoard} from './src/functions'
export default class App extends Component {
 
 constructor(props) { 
   super(props)
   this.state = this.createState()
 }
 
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => { 
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return { 
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }


  render(){
    return (
      <View style={styles.container}>

              <View style={styles.board}>
                <MineField board={this.state.board} />
              </View> 
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  board: {
    alignItems: 'center', 
    backgroundColor: '#AAA'
  }
})