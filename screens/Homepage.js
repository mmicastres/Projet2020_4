import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Homepage extends React.Component {

    goToView = (i) => {
        this.props.navigation.navigate(i);
        //console.log(this.props.navigation.navigate(i));
    }

	render()
	{
		return (
			<View style={styles.container}>
                <Button
                    title="Créer un évènement"
                    onPress={ () => { this.goToView("CreateEventForm"); }}
                    style={styles.bouton}
                />
                <Button
                    title="Définir un budget pour un évènement"
                    onPress={ () => { this.goToView("budgetEvent"); }}
                    style={styles.bouton}
                />
                <Button
                    title="Liste des tâches"
                    onPress={ () => { this.goToView("listeTaches"); }}
                    style={styles.bouton}
                />
                <Button
                    title="Liste des invités"
                    onPress={ () => { this.goToView("listeInvites"); }}
                    style={styles.bouton}
                />
            </View>
		);
	}
}

const styles = {
    container: {
        textAlign: "center",
        justifyAlign: "center"
    },
    bouton: {
        margin:20
    }
}