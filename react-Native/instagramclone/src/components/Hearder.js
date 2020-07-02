import React, {Component} from 'react'
import {StyleSheet, Text, View, Platform, Image} from 'react-native'
import icon from '../../assets/imgs/icon.png'


class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>Instagrinho</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 40, 
        alignItems: 'center',
               
        height: 50,
        borderBottomWidth: 1
        
        // boderColor: '#BBB'
    }, 
    rowContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    image: {
        height: 40, 
        width: 40, 
        resizeMode: 'contain'
    }, title: {
        color: '#000', 
        alignItems: 'center',
        height: 40,
        fontSize: 28

    }
})

export default Header