
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import * as Contacts from 'expo-contacts';
import MultiSelect from 'react-native-multiple-select';

export default class Contact extends React.Component {
    state = {
        contact: [],
        list: [],
        envoie: []
    };

    /* ------------------------- Demande la permission et accède aux contacts ------------------------- */

    Permission = event => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            console.log(
                'là normalement on demande la permissions et si on dit oui bah on affiche la liste des contacts'
            );
            this.setState({ permission: status });
            if (this.state.permission === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.EMAILS, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image]
                });
            }
        })();
    }

    /* ---------------------------- on fait une requête à partir des données du state ---------------------------- */

    Envoie = event => {
        const contact = this.state.contact
        this.state.selectedItems.map((item) => {
            contact.map((data) => {
                if (item == data.id) {
                    if (data.lastName == undefined) {
                        data.lastName = ''
                    }
                    if (data.firstName == undefined) {
                        data.firstName = ''
                    }
                    if (data.emails == undefined) {
                        data.emails = ''
                    }
                    if (data.phoneNumbers[0].number == undefined) {
                        data.phoneNumbers[0].number = ''
                    }
                    const invite = {
                        'nom': data.firstName,
                        'prenom': data.lastName,
                        'mail': data.emails,
                        'numero de telephone': data.phoneNumbers[0].number
                    };

                    let fetchOptions = {
                        method: 'POST',
                        //header: {
                        //'Accept': 'application/json, text/plain, */*',
                        //'Content-Type': 'application/json'
                        // },
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

                }
            })

        })

    }

    componentDidMount() {
        (async () => {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image]
            });
            this.setState({ contact: data });
        })();
    }

    /* ---------------------------- Affichage de la liste des contacts ---------------------------- */

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        const { selectedItems } = this.state;
        console.log(this.state.contact)
        return (
            <View>
                <Button title='Et là ?' onPress={this.Permission} />
                <MultiSelect
                    items={this.state.contact}
                    uniqueKey="id"
                    ref={component => {
                        this.multiSelect = component;
                    }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Choisir parmis vos contact"
                    searchInputPlaceholderText="Rechercher..."
                    onChangeInput={text => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#48d22b"
                    submitButtonText="Valider"
                    styleListContainer={styles.contact}
                />
                <Button title='On envoie tout !! ' onPress={this.Envoie} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contact: {
        height: 500,
        minWidth: '1000px'
    },
});
