import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'Paulinho', nota: 10.0},
    {id: 2, nome: 'Bia', nota: 9.1},
    {id: 3, nome: 'Flavia', nota: 5.4},
    {id: 4, nome: 'Rebeca', nota: 7.6},
    {id: 5, nome: 'Raquel', nota: 6.8},
    {id: 6, nome: 'Ana', nota: 8.0},
    {id: 7, nome: 'Carol', nota: 9.8},
    {id: 8, nome: 'Jaqueline', nota: 9.9},
    {id: 9, nome: 'Mayara', nota: 8.8},

    {id: 11, nome: 'Paulinho', nota: 10.0},
    {id: 12, nome: 'Bia', nota: 9.1},
    {id: 13, nome: 'Flavia', nota: 5.4},
    {id: 14, nome: 'Rebeca', nota: 7.6},
    {id: 15, nome: 'Raquel', nota: 6.8},
    {id: 16, nome: 'Ana', nota: 8.0},
    {id: 17, nome: 'Carol', nota: 9.8},
    {id: 18, nome: 'Jaqueline', nota: 9.9},
    {id: 19, nome: 'Mayara', nota: 8.8},
    
]

const itemEstilo = {
    paddingHorizontal: 15, 
    height: 50, 
    backgroundColor: '#DDD', 
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}