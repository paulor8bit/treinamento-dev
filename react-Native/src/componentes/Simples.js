import React from 'react'
import {Text} from 'react-native'
import Padrao from '../estilo/Padrao'


export default function(props) {
    return <Text style={[Padrao.ex]} >{props.texto}</Text>
}