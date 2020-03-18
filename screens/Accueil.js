import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../components/Menu';

export default class Accueil extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Text style={{paddingBottom: 5}}>Bonjour {this.props.route.params.user} !</Text>
                <Menu navigation={this.props.navigation}></Menu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Raleway Medium'
    },
});