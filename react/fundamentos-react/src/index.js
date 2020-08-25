import ReactDOM from 'react-dom'
import React from 'react'
import './darkTheme.css'
import Primeiro from './components/basicos/Primeiro'

const tag = <div>Olá, <strong> Paulinho</strong>!</div>

const el = document.getElementById('root')
ReactDOM.render(
    <>
        <Primeiro/>
        {tag}
    </>, el)