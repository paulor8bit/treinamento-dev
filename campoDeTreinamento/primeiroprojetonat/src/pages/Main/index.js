import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <Form>
                <Input
                    autoCorret={false}
                    autoCapitalize="none"
                    placeholder="Adcionar usuário"
                />
                <SubmitButton>
                    <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
            </Form>
        </Container>
    );
}
Main.navigationOptions = {
    title: 'Usuários',
};
