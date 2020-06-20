import React, {Component} from 'react'
import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import commonStyles from '../commonStyles'
export default class AddTask extends Component {
    render() {
        return  (
       
            <Modal transparent={true} visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType='slide'>
            <TouchableWithoutFeedback
                onPress={this.props.onCancel}> 
                <View style={styles.casaa}></View>
            </TouchableWithoutFeedback>
           
            <View style={styles.container}>
            <Text style={styles.header}> Nova Tarefa</Text>
            </View>

            <TouchableWithoutFeedback
                onPress={this.props.onCancel}> 
                <View style={styles.casaa}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
    }
}

const styles = StyleSheet.create({
    casaa: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }, 
    container: {
        flex: 1, 
        backgroundColor: '#FFF'

    }, 
    header: { 
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center', 
        padding: 15, 
        fontSize: 18

    }
})


