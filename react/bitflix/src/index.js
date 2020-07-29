import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        < Route path="/cadastro/video" component={CadastroVideo} exact />
        < Route path="/" component={App} exact/>
        < Route component={() => (<div>404 =\</div>)}/>
    </Switch> 
    
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);