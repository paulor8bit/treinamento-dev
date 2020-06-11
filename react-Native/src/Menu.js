import React from 'react'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'
import {createDrawerNavigator} from 'react-navigation';
import Plataformas from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProp'
import Evento from './componentes/Evento'
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
    ListaFlex: {
        screen: () => <ListaFlex/>,
        navigationOptions: {title: 'Lista Flex'}
        
    },  
   
    Evento: {
        screen: () => <Evento/>,
        
    },     
    ValidarProps: {
        screen: () => <ValidarProps label="O ano é: " ano={18}/>,
        
    },  
    Contador: {
    screen: () => <Contador numeroInicial={0} />,
    
    },  
    Plataformas: {
    screen: () => <Plataformas />,
    
    },
  MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par & Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='Paulinho!!' />,
        
    }
},  {drawerWidth: 300})

