import React, {Component} from 'react'
import {ImageBackground, Text, StyleSheet,
        View, TextInput, TouchableOpacity, Platform} from 'react-native'
import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {
    state = {
        name: '',
        email: '', 
        password: '', 
        confirmPassword: '', 
        stageNew: true
    }
    
    render () {
        return (
            <ImageBackground source={backgroundImage}
            style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}> 
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                
                {
                    this.state.stageNew &&

                    <TextInput placeholder='Nome' value={this.state.email}
                    style={styles.input} onChange={email => this.setState({email})}></TextInput>
                                   
                    
                }
                    
                    <TextInput placeholder='Email' value={this.state.email}
                    style={styles.input} onChange={email => this.setState({email})}></TextInput>
                     
                     <TextInput placeholder='Senha' value={this.state.password} secureTextEntry={true}
                    style={styles.input} onChange={password => this.setState({password})}></TextInput>


{
                    this.state.stageNew &&

                    <TextInput placeholder='Confirme sua senha' value={this.state.confirmPassword} secureTextEntry={true}
                    style={styles.input} onChange={confirmPassword => this.setState({confirmPassword})}></TextInput>
                                   
                    
                }
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {
                                    this.state.stageNew ? 'Registrar' : 'Entrar' 
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({ 
    background: {
        flex: 1, 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    title: {
        fontFamily: commonStyles.fontFamily, 
        color: commonStyles.colors.secondary, 
        fontSize: 70, 
        marginBottom: 10
    }, 
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: Platform.OS == 'ios' ? 15 : 10,
        color: '#000'
    }, 
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20, 
        width: '90%',
    }, 
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    }, 
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize:20
    }
})