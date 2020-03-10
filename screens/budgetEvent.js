import React from 'react';
import { TextInput, Text, TouchableOpacity, View, Picker } from 'react-native';

export default class budgetEvent extends React.Component
{
    state = {
        budget : 0,
    }

    changeValue = (value) => {
        this.setState({ budget : value })
    }

    handlerSubmit = () => {
        const regEx = /^\d*$/;
        if(regEx.test(this.state.budget))
        {
            alert("Budget fixé");
            console.log(this.state.budget);

            let budget = {
                'montant' : this.state.budget,
            };
            
            let fetchOptions = {
                method: 'POST',
                body: JSON.stringify(budget)
            };
            
            const url = 'http://webmmi.iut-tlse3.fr/~vtl3128a/API/definir_budget.php';
            
            fetch(url, fetchOptions)
            .then((response) => {
                console.log(fetchOptions);
                return response.text();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
            });
        }
        else
        {
            alert("Saisie non valide. Corrigez votre saisie.")
        }
    }

    render()
    {
        return(
            <View>
                <Text style={styles.formTitle}>
                    Budget de l'évènement
                </Text>
                <TextInput
                    ref={(eventBudget) => { this._eventBudget = eventBudget; }}
                    onChangeText={this.changeValue}
                    placeholder="Budget"
                    keyboardType="numeric"
                    style={styles.formContent}
                />
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