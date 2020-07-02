import React from 'react'
import {ScrollView, View, Text, StyleSheet} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import {Gravatar} from 'react-native-gravatar'


export default props => {

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar}
                options={{
                        email: props.navigation.getParam('email'),
                        secure: true
                }} />
            <View style={styles.userInfo}> 
                <Text style={styles.name}>{props.navigation.getParam('name')}</Text>
                <Text style={styles.email}>{props.navigation.getParam('email')}</Text>
            </View>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    ) 
}
 
const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1, 
        borderColor: '#DDD'
    }, title: {
        color: '#000',
        fontSize: 30, 
        paddingTop: 30, 
        padding: 10
    }, avatar: {
        width: 60,
        height: 60,
        borderWidth: 3, 
        borderRadius: 30, 
        margin: 30
    }, userInfo: {
        marginLeft: 10, 
    },name:{
        fontSize: 20, 
        marginBottom: 5
        
    }, email: {
        fontSize: 15
    }

})