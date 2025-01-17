import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class ListeInvites extends React.Component {
    state = {
        invite: []
    }

    componentDidMount()
    {
        this.affiche();
    }

    /**
     * Récupère chaque objet du tableau stocké dans le state et l'affiche sur la page
     */
    renderItem = ({ item }) => (
        <View>
            {this.state.isLoading ? (
                <View>
                    <ActivityIndicator size='large' color='#bad555' />
                </View>
            ) : (
                    <Text
                        onPress={this.click}
                    >
                        {item}{' '}
                    </Text>
                )}
        </View>
    );

    /**
     * Récupère la liste des invités
     */
    affiche = () => {
        let fetchOptions = { method: "GET" };

        const url = "http://webmmi.iut-tlse3.fr/~vtl3128a/API/liste_invites.php";

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                dataJSON.map((item) => (this.setState({ invite: [...this.state.invite, item.NOM + ' ' + item.PRENOM] })))
            })
    }

    render() {
        console.log(this.state.invite)
        return (
            <View>
                <Button title='Ajouter un invité' onPress={() => this.props.navigation.navigate("Ajouter un invité")} />
                <Button title='Ajouter un invité depuis vos contacts' onPress={() => this.props.navigation.navigate("Ajouter un contact")} />
                <FlatList
                    data={this.state.invite}
                    renderItem={this.renderItem}
                    keyExtractor={(index) => index.id}></FlatList>
            </View>
        )
    }
}

export default ListeInvites;