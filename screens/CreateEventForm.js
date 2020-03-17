import React from 'react';
import { Text, View, TextInput, Button, DatePickerAndroid, TimePickerAndroid, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { styles } from '../styles/CreateEventFormStyles';

export default class CreateEventForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            androidDateStart: `${new Date().getUTCFullYear()}-${new Date().getUTCMonth() + 1}-${new Date().getUTCDate()}`,
            androidTimeStart: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
            androidDateEnd: `${new Date().getUTCFullYear()}-${new Date().getUTCMonth() + 1}-${new Date().getUTCDate()}`,
            androidTimeEnd: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
			eventName: "Nouvel évènement",
			location: "",
			type: "",
		};
    }
    
    /**
     * Renvoie le contenu du champ "eventName" dans un paramètre du state
     * @param e L'évènement dans lequel est stocké la saisie des caractères dans le champ de texte
     */
	changeEventName = (e) => {
        this.setState({ eventName: e });
    };
    
    /**
     * Renvoie le contenu du champ "eventLocation" dans un paramètre du state
     * @param e L'évènement dans lequel est stocké la saisie des caractères dans le champ de texte
     */
	changeEventLocation = (e) => {
		this.setState({ location: e });
    };
    
    /**
     * Ouvre l'interface de sélection de date pour le bouton de sélection de la date du début
     */
	setStartDateAndroid = async () => {
        try
        {
			const { action, year, month, day } = await DatePickerAndroid.open({
				date: new Date(Date.now()),
				minDate: new Date(Date.now()),
			});
			if (action !== DatePickerAndroid.dismissedAction) {
                this.setState(
                {
                    androidDateStart: `${year}-${month + 1}-${day}`,
                });
            }
		}
		catch ({ code, message }) {
			console.warn('Cannot open date picker', message);
		}
    };

    /**
     * Ouvre l'interface de sélection de date pour le bouton de sélection de la date de fin
     */
    setEndDateAndroid = async () => {
        try
        {
			const { action, year, month, day } = await DatePickerAndroid.open({
				date: new Date(Date.now()),
				minDate: new Date(Date.now()),
			});
			if (action !== DatePickerAndroid.dismissedAction) {
                this.setState(
                {
                    androidDateEnd: `${year}-${month + 1}-${day}`,
                });
            }
		}
		catch ({ code, message }) {
			console.warn('Cannot open date picker', message);
		}
    };

    /**
     * Ouvre l'interface de sélection de l'heure pour le bouton de sélection de l'heure du début
     */
    setStartTimeAndroid = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 0,
                minute: 0,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState(
                {
                    androidTimeStart: `${hour}:${minute}`,
                });
            }
        }
        catch ({ code, message }) {
        console.warn('Cannot open time picker', message);
        }
    }

    /**
     * Ouvre l'interface de sélection de l'heure pour le bouton de sélection de l'heure du fin
     */
    setEndTimeAndroid = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 0,
                minute: 0,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState(
                {
                    androidTimeEnd: `${hour}:${minute}`,
                });
            }
        }
        catch ({ code, message }) {
        console.warn('Cannot open time picker', message);
        }
    }
    
    /**
     * Récupère les données stockées dans le state pour les renvoyer à la base de données sous forme d'objet
     */
	handlerSubmit = () => {
        console.log(this.state);
        if(this.state.eventName == "" || this.state.type == "")
        {
            alert("Attribuez au moins un nom/un type à votre évènement!")
        }
        else
        {
            let evenement = {
                nom: this.state.eventName ,
                debut: `${this.state.androidDateStart} ${this.state.androidTimeStart}`,
                fin: `${this.state.androidDateEnd} ${this.state.androidTimeEnd}`,
                lieu: this.state.location,
                type: this.state.type,
                };
            
            let fetchOptions = {
                method: 'POST',
                body: JSON.stringify(evenement)
            };
            const url = 'http://webmmi.iut-tlse3.fr/~vtl3128a/API/creer_evenement.php';
            fetch(url, fetchOptions)
            .then((response) => {
            console.log(fetchOptions);
            return response.text();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            });
            
            alert("Evènement créé!");
        }
        //this.props.navigation.navigate("Homepage");
    };
    
	render() {
		return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titres}>
                        {this.state.eventName}
                    </Text>

                    <Text style={styles.formDescr}>
                        Nom de l'évènement
                    </Text>
                    <TextInput 
                        ref={(eventName) => { this._eventName = eventName; }} 
                        onChangeText={this.changeEventName} 
                        style={styles.formName} 
                        placeholder="Nom de l'évènement" 
                    />

                    <Text style={styles.formDescr}>
                        Lieu de l'évènement
                    </Text>
                    <TextInput 
                        ref={(eventLocation) => { this._eventLocation = eventLocation; }} 
                        onChangeText={this.changeEventLocation} 
                        style={styles.form} 
                        placeholder="Lieu" 
                    />

                    <Text style={styles.formDescr}>
                        Type
                    </Text>
                    <Picker
                        selectedValue={this.state.type}
                        style={{height: 50, width: 250}}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({type: itemValue})}
                    >
                        <Picker.Item label="Anniversaire" value="birthday"/>
                        <Picker.Item label="Mariage" value="wedding"/>
                    </Picker>

                    <Button title="Date de début" onPress={this.setStartDateAndroid} />
                    <Button title="Heure de début" onPress={this.setStartTimeAndroid} />
                    <Text style={styles.dateEvent}>Date de début choisie : {this.state.androidDateStart} - {this.state.androidTimeStart}</Text>

                    <Button title="Date de fin" onPress={this.setEndDateAndroid} />
                    <Button title="Heure de fin" onPress={this.setEndTimeAndroid} />
                    <Text style={styles.dateEvent}>Date de fin choisie : {this.state.androidDateEnd} - {this.state.androidTimeEnd}</Text>
                </View>
                <TouchableOpacity onPress={this.handlerSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                        Valider
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
	}
}