import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

class Liste extends React.Component {
    state = {
        invite: []
    }

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

    Affiche = (event) => {
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
        return (<View>
            <Button title='Appuie lol' onPress={this.Affiche} />
            <FlatList
                data={this.state.invite}
                renderItem={this.renderItem}
                keyExtractor={index => index.id}></FlatList>
        </View >)
    }
}

export default Liste;