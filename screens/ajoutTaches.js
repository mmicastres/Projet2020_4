import React from 'react';
import { View, TextInput, TimePickerAndroid, DatePickerAndroid, Button, TouchableOpacity, Text} from 'react-native';

export default class listeTaches extends React.Component
{
    state = {
        taskName: "",
        taskDescr: "",
        androidDateStart: `${new Date().getUTCFullYear()}-${new Date().getUTCMonth() + 1}-${new Date().getUTCDate()}`,
        androidTimeStart: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`,
    }

    /**
     * Renvoie le contenu du champ "taskName" dans un paramètre du state
     * @param value L'évènement dans lequel est stocké la saisie des caractères dans le champ de texte
     */
    changeValueTaskName = (value) => {
        this.setState({ taskName : value });
    }

    /**
     * Renvoie le contenu du champ "taskDescr" dans un paramètre du state
     * @param text L'évènement dans lequel est stocké la saisie des caractères dans le champ de texte
     */
    changeValueTaskDescr = (text) => {
        this.setState({ taskDescr : text })
    }

    /**
     * Action exécutée lors de l'appui sur le bouton Valider.
     * Récupère les données saisies dans le formulaire et les envoie dans la base de données.
     */
    handlerSubmit = () => {
        if(!this.state.taskName)
        {
            alert("Saisissez une tâche!");
        }
        else
        {
            alert("Tâche ajoutée!");
            let tache = {
                'nom' : this.state.taskName,
                'description' : this.state.taskDescr,
                'date_butoir' : `${this.state.androidDateStart} ${this.state.androidTimeStart}`,
            };
                
            let fetchOptions = {
                method: 'POST',
                body: JSON.stringify(tache)
            };
            
            const url = 'http://webmmi.iut-tlse3.fr/~vtl3128a/API/ajouter_tache.php';
            
            fetch(url, fetchOptions)
            .then((response) => {
            console.log(fetchOptions);
            return response.text();
            })
            .then((dataJSON) => {
            console.log(dataJSON);
            });
        }
    }

    /**
     * Ouvre l'interface de sélection de date
     */
    setDateAndroid = async () => {
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
     * Ouvre l'interface de sélection de l'heure
     */
    setTimeAndroid = async () => {
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

    render()
    {
        return(
            <View>
                <Text style={styles.formTitle}>
                    Nom de la tâche
                </Text>
                <TextInput
                    onChangeText={ (text) => this.changeValueTaskName(text)}
                    placeholder="Nom de la tâche"
                    keyboardType='default'
                    style={styles.formContent}
                />

                <Text style={styles.formTitle}>
                    Description
                </Text>
                <TextInput
                    onChangeText={ (text) => this.changeValueTaskDescr(text)}
                    placeholder="Description de la tâche"
                    keyboardType='default'
                    style={styles.formContent}
                />

                <Button title="Date butoire" onPress={this.setStartDateAndroid} />
                <Button title="Heure butoire" onPress={this.setStartTimeAndroid} />
                <Text style={styles.dateEvent}>Date butoire : {this.state.androidDateStart} - {this.state.androidTimeStart}</Text>

                <TouchableOpacity onPress={this.handlerSubmit}>
                    <Text style={styles.submitButton}>
                        Valider
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    formTitle: {
        padding: 10,
    },
    formContent: {
        padding: 10,
    },
    submitButton: {
        height:100,
        textAlignVertical: 'center',
        alignContent: 'center',
        textAlign: 'center',
        backgroundColor:'#0f0',
        color: '#fff',
        fontSize: 40,
    }
}