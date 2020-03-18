import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class Menu extends React.Component
{
    goToView = (i) => {
        this.props.navigation.navigate(i);
        //console.log(this.props.navigation.navigate(i));
    }

    render()
    {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center'}}>

            <View style={{justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={ () => { this.goToView("Créer un évènement"); }}>
                    <ImageBackground
                        source={require('../images/evenement.png')}
                        style={{width: 200, height: 175, justifyContent: 'center', alignItems: 'center', marginBottom: 15}}
                        imageStyle={{reziseMode: 'stretch'}}>
                        <Text style={{color: 'black', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.75)', paddingHorizontal: 38, paddingVertical: 10}}>Créer un évènement</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                <TouchableOpacity
                    onPress={ () => { this.goToView("Saisir un budget"); }}>
                    <ImageBackground
                        source={require('../images/budget.png')}
                        style={{width: 161, height: 135, justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginLeft: 12, marginRight: 6}}
                        imageStyle={{reziseMode: 'stretch'}}>
                        <Text style={styles.texte}>Saisir un budget</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => { this.goToView("Liste des invités"); }}>
                    <ImageBackground
                        source={require('../images/invites.png')}
                        style={{width: 161, height: 135, justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginLeft: 5, marginRight: 12}}
                        imageStyle={{reziseMode: 'stretch'}}>
                        <Text style={styles.texte}>Liste des invités</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => { this.goToView("Liste des tâches"); }}>
                    <ImageBackground
                        source={require('../images/taches.png')}
                        style={{width: 161, height: 135, justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginLeft: 12, marginRight: 6}}
                        imageStyle={{reziseMode: 'stretch'}}>
                        <Text style={styles.texte}>Liste des tâches</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity>
                    <ImageBackground
                        source={require('../images/courses.png')}
                        style={{width: 161, height: 135, justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginLeft: 5, marginRight: 12}}
                        imageStyle={{reziseMode: 'stretch'}}>
                        <Text style={styles.texte}>Liste des courses</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = 
{
   texte: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 30.5,
    paddingVertical: 10
    }
}

/*<Card
featuredTitle="Créer un évènement"
image={require("../images/evenement.png")}
imageProps={{resizeMode: 'cover'}}
containerStyle={{ width: 250, padding: -5, paddingBottom: 0 }}>
</Card>*/