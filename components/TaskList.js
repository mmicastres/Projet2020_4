import React from 'react';
import { FlatList, Text, View , ScrollView } from 'react-native';
import { styles } from './TaskListStyles'

export default class TaskList extends React.Component {

    state = {
        tasks : [],
    }

    getListe = () => {
        let fetchOptions = { method: "GET" };

        const url = "http://webmmi.iut-tlse3.fr/~vtl3128a/API/liste_taches.php";

        fetch(url, fetchOptions)
        .then((response) => {
        return response.json();
        })
        .then((dataJSON) => {
            //console.log(dataJSON);
            let liste = [];
            dataJSON.map( (element) => {
                liste.push(element);
            });
            this.setState({ tasks : liste });
            //console.log(this.state.tasks)
            //dataJSON.map((item) => this.setState({ invite: [...this.state.invite, item.NOM + ' ' + item.PRENOM] }));
        })
    }
    
    componentDidMount()
    {
        this.getListe();
    }

    render() {
        return(
            <ScrollView style={styles.scrollList}>
                <FlatList
                    data={this.state.tasks}
                    keyExtractor={ (item) => { item.id }}
                    renderItem={ ({item}) => {
                        //console.log(item);
                        return(
                            <View style={styles.listItem}>
                                <Text style={styles.listItemName}>{item.nom}</Text>
                                <Text style={styles.listItemDate}>{item.date_butoir}</Text>
                            </View>
                        )
                    }}
                >
                </FlatList>
            </ScrollView>
        )
    }
}