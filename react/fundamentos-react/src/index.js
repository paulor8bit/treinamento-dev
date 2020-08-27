import ReactDOM from 'react-dom'
import React from 'react'
import './darkTheme.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <div>Olá, <strong> Paulinho</strong>!</div>
const el = document.getElementById('root')

ReactDOM.render(
    <div id="app">
        <Primeiro/>
        {tag}
        <ComParametro titulo="Colegio"
        aluno="Paulo" nota={10}/>
        <ComParametro
        aluno="João" nota={5}/>
    </div>, el)