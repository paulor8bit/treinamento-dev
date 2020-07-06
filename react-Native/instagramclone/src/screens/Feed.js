import React, { Component } from 'react'
import {StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Hearder'
import Post from '../components/Post'


class Feed extends Component { 
    state = {
        post: [{
            id: Math.random(), 
            nickname: 'Rafael Pereira Filho',
            email: 'rafa@hotmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
            },{
                nickname: 'Ana Julia Arruada',
                comment: 'Foto linda!!!!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Leandro',
            email: 'fill@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) =>
                    <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#F5FCFF'
    }
})

export default Feed