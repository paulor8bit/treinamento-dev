
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Hearder'
import Post from './src/components/Post'


export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Paulo Ricardo', 
      comment: ' Boa foto'
    }, {
      nickname: 'Paulinho', 
      comment: ' Pow vei nunca vi uma foto tão bela assim'
    }]
  return (
   <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} 
        comments={comments}/>
   </View> 
  );
}

}