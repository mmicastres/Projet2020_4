import React from 'react';
import { View, TextInput, Button, TouchableOpacity, Text} from 'react-native';

export default class Connexion extends React.Component
{
    state = {
        username: "",
        password: "",
    }

    handlerChangeUser = (e) => {
        this.setState({ username : e })
    }

    handlerChangePass = (e) => {
        this.setState({ password : e })
    }

    handlerSubmit = () => {
        console.log(this.state);
    }

    render()
    {
        return(
            <View>
                <Text style={styles.formTitle}>
                    E-mail
                </Text>
                <TextInput
                    ref={ (email) => {this._email = email} }
                    onChangeText={this.handlerChangeUser}
                    placeholder="E-mail"
                    keyboardType='email-address'
                    style={styles.formContent}
                />

                <Text style={styles.formTitle}>
                    Mot de passe
                </Text>
                <TextInput
                    ref={ (pass) => {this._pass = pass} }
                    onChangeText={this.handlerChangePass}
                    placeholder="Mot de passe"
                    keyboardType='visible-password'
                    style={styles.formContent}
                />
                <TouchableOpacity onPress={this.handlerSubmit}>
                    <Text style={styles.submitButton}>
                        Connexion
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    formTitle: {
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    formContent: {
        borderWidth: 1,
        borderColor: 'rgb(160,160,160)',
        marginLeft: '22.5%',
        width: '50%',
        padding: 10,
    },
    submitButton: {
        marginTop: 24,
        height:100,
        textAlignVertical: 'center',
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor:'#0f0',
        color: '#fff',
        fontSize: 24,
    }
}