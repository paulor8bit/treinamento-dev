import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <div>Olá, <strong> Paulinho</strong>!</div>


export default props => {
    return (
        <>
        <Primeiro/>
        {tag}
        <ComParametro titulo="Colegio"
        aluno="Paulo" nota={10}/>
        <ComParametro
        aluno="João" nota={5}/>  
        </>
    )
}