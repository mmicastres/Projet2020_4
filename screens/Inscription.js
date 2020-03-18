import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class Inscription extends React.Component {
    state = {
        invite: []
    }

    /* ---------------------------- On enregistre chaque valeur du formulaire dans le state ---------------------------- */

    handlerPrenom = event => {
        const nouv = Object.assign({}, this.state.invite, {
            prenom: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handlerNom = event => {
        const nouv = Object.assign({}, this.state.invite, {
            nom: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handlerTel = event => {
        const nouv = Object.assign({}, this.state.invite, {
            tel: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handlerMail = event => {
        const nouv = Object.assign({}, this.state.invite, {
            mail: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handlerMdp = event => {
        const nouv = Object.assign({}, this.state.invite, {
            mdp: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };
    /* ---------------------------- On fait une requête avec les valeurs du state ---------------------------- */

    handlerEnvoie = event => {
        let invite = {
            'nom': this.state.invite.nom,
            'prenom': this.state.invite.prenom,
            'mail': this.state.invite.mail,
            'numero de telephone': this.state.invite.tel,
            'mot de passe': this.state.invite.mdp
        };

        let fetchOptions = {
            method: 'POST',
            body: JSON.stringify(invite)
        };

        const url = 'http://webmmi.iut-tlse3.fr/~vtl3128a/API/inscription.php';

        fetch(url, fetchOptions)
            .then((response) => {
                return response.text();
            })
            .then((dataJSON) => {
                console.log('lol' + dataJSON);
        });

        this.props.navigation.navigate('Krevent', {'user': this.state.invite.prenom});
    };
    /* ---------------------------- Formulaire d'inscription ---------------------------- */

    render() {
        return (
            <View>
                <TextInput onChange={this.handlerNom} style={styles.item} placeholder={'Entrez votre Nom'} ></TextInput>
                <TextInput onChange={this.handlerPrenom} style={styles.item} placeholder={'Entrez votre Prénom'} ></TextInput>
                <TextInput onChange={this.handlerTel} style={styles.item} placeholder={'Entrez votre Numéro de téléphone'} ></TextInput>
                <TextInput onChange={this.handlerMail} style={styles.item} placeholder={'Entrez votre Adresse mail'} ></TextInput>
                <TextInput onChange={this.handlerMdp} style={styles.item} placeholder={'Entrez votre Mot de passe'} ></TextInput>
                <Button onPress={this.handlerEnvoie} title='valider'></Button>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});