import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class Form extends React.Component {
    state = {
        invite: {
            nom: '',
            prenom: '',
            mail: '',
            tel: ''
        }
    };

    /* ---------------------------- On enregistre chaque valeur du formulaire dans le state ---------------------------- */

    handleChangePrenom = event => {
        const nouv = Object.assign({}, this.state.invite, {
            prenom: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handleChangeNom = event => {
        const nouv = Object.assign({}, this.state.invite, {
            nom: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handleChangeNumero = event => {
        const nouv = Object.assign({}, this.state.invite, {
            tel: event.nativeEvent.text
        });
        this.setState({
            invite: nouv
        });
    };

    handleChangeAdresse = event => {
        const nouv = Object.assign({}, this.state.invite, {
            mail: event.nativeEvent.text
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
            'numero de telephone': this.state.invite.tel
        };

        let fetchOptions = {
            method: 'POST',
            body: JSON.stringify(invite)
        };

        const url = 'http://webmmi.iut-tlse3.fr/~vtl3128a/API/envoi_invites.php';

        fetch(url, fetchOptions)
            .then((response) => {
                console.log(fetchOptions);
                return response.text();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            });
    };
    /* ---------------------------- Formulaire d'ajout d'un invité ---------------------------- */

    render() {
        console.log(this.state.invite);
        return (
            <View>
                <TextInput
                    onChange={this.handleChangePrenom}
                    style={styles.item}
                    on
                    placeholder="Prénom de l'invité"
                ></TextInput>
                <TextInput
                    onChange={this.handleChangeNom}
                    style={styles.item}
                    placeholder="nom de l'invité"
                ></TextInput>
                <TextInput
                    onChange={this.handleChangeNumero}
                    style={styles.item}
                    placeholder="Numéro de téléphone de l'invité"
                ></TextInput>
                <TextInput
                    onChange={this.handleChangeAdresse}
                    style={styles.item}
                    on
                    placeholder="Adresse mail de l'invité"
                ></TextInput>
                <Button onPress={this.handlerEnvoie} title='valide'></Button>
            </View>
        );
    }
}

export default Form;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
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
