import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, ActivityIndicator } from 'react-native';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    Avatar,
    User,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';
import api from '../../services/api';

Icon.loadFont();

class Main extends Component {
    state = {
        newUser: '',
        users: [],
        loading: false,
    };

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        this.setState({ loading: true });
        const response = await api.get(`/users/${newUser}`);
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };

        this.setState({ users: [...users, data], newUser: '', loading: false });

        Keyboard.dismiss();
    };

    render() {
        const { users, newUser, loading } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar usuário"
                        value={newUser}
                        onChangeText={(text) =>
                            this.setState({ newUser: text })
                        }
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton onPress={this.handleAddUser}>
                        {loading ? (
                            <ActivityIndicator loading={loading} color="#FFF" />
                        ) : (
                            <Icon name="add" size={20} color="#FFF" />
                        )}
                    </SubmitButton>
                </Form>

                <List
                    data={users}
                    keyExtrator={(user) => user.login}
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar }} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>
                            <ProfileButton onPress={() => {}}>
                                <ProfileButtonText>
                                    Ver perfil
                                </ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Usuários',
};

export default Main;
