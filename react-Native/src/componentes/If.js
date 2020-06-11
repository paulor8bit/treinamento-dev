import React from 'react';
// import { View } from 'react-native';
// import { Container } from './styles';
import If from './If.js'
const componentes = (props) => {
  if(props.test) {
      return props.children
  } else {
      return false
  }
}

export default componentes;