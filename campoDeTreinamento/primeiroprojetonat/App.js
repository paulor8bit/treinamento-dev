import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            altura: 0,
            massa: 0,
            idade: 0,
            resultado: 0,
            caloria: 0,
            resultIMC: '',
            resultTexto: 'Aguardando valores...',
        };
        this.calcular = this.calcular.bind(this);
    }

    calcular() {
        this.state.resultado =
            (this.state.massa / (this.state.altura * this.state.altura)) *
            10000;

        this.state.ideal =
            (this.state.altura * this.state.altura * 24.9) / 10000;

        this.state.caloria =
            66 +
            13.7 * this.state.massa +
            5 * this.state.altura -
            6.8 * this.state.idade;

        if (this.state.massa != 0) {
            this.state.resultTexto = `Sua caloria basal é de ${this.state.caloria.toFixed(
                2
            )}`;
            this.state.resultIMC = `Com um IMC de  ${this.state.resultado.toFixed(
                2
            )}`;
        }

        // if (this.state.massa < 10 || this.state.massa > 200) {
        //     console.log(this.state.massa);
        //     Alert.alert('Erro!', 'Verifique valor do peso.');
        //     this.state.resultTexto = 'Verifique valor do peso.';
        //     this.state.resultado = 0;
        // } else if (this.state.altura < 1 || this.altura > 3) {
        //     Alert.alert('Erro!', 'Verifique valor da altura.');
        //     this.state.resultTexto = 'Verifique valor da altura.';
        //     this.state.resultado = 0;
        // } else if (isNaN(this.state.altura)) {
        //     Alert.alert('Erro!', "Altura deve ser separada por '.' \nEx: 1.56");
        //     this.state.resultTexto = 'Verifique valor da altura.';
        //     this.state.resultado = 0;
        // } else if (this.state.resultado < 16) {
        //     this.state.resultTexto = 'Muito abaixo do peso!';
        // } else if (this.state.resultado < 17) {
        //     this.state.resultTexto = 'Moderadamente abaixo do peso!';
        // } else if (this.state.resultado < 18.5) {
        //     this.state.resultTexto = 'Abaixo do peso!';
        // } else if (this.state.resultado < 25) {
        //     this.state.resultTexto = 'Saudável!';
        // } else if (this.state.resultado < 30) {
        //     this.state.resultTexto = 'Sobrepeso!';
        // } else if (this.state.resultado < 35) {
        //     this.state.resultTexto = 'Obesidade Grau 1°!';
        // } else if (this.state.resultado < 40) {
        //     this.state.resultTexto = 'Obesidade Grau 2°!';
        // } else {
        //     this.setState.resultTexto = 'Obesidade Grau 3°';
        // }
        this.setState(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.entrada}>
                    <Text style={styles.resultado}>Digite seu peso</Text>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Peso em KG"
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(massa) => {
                            this.setState({ massa });
                        }}
                    />
                    <Text style={styles.resultado}>Digite sua altura</Text>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Altura em CM"
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(altura) => {
                            this.setState({ altura });
                        }}
                    />

                    <Text style={styles.resultado}>Digite sua Idade</Text>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Idade"
                        keyboardType="numeric"
                        style={styles.input}
                        onChangeText={(idade) => {
                            this.setState({ idade });
                        }}
                    />
                </View>

                <Button
                    onPress={this.calcular}
                    title="Calcular"
                    color="#007BFF"
                />

                <Text style={styles.resultado}>{this.state.resultIMC}</Text>
                <Text style={styles.resultado}>{this.state.resultTexto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    entrada: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        textAlign: 'center',
        width: '100%',
        fontSize: 25,
        marginTop: 10,
    },
    resultado: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
    },
});
