import ReactDOM from 'react-dom'
import React from 'react'
import './darkTheme.css'

const tag = <div>Olá, <strong> Paulinho</strong>!</div>
const el = document.getElementById('root')
ReactDOM.render(<>{tag}</>, el)