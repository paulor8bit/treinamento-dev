import React, {Component} from 'react'
import { Modal, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'

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
        </Modal>
    )
    }
}

const styles = StyleSheet.create({
    casaa: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
})


