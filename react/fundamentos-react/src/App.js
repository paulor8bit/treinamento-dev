import React from 'react'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Card from './components/layout/Card'
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
        
        <Card titulo="Desafio Aleatorio">
        <Aleatorio min={1} max={6} />
        </Card>
        </>

    )
}