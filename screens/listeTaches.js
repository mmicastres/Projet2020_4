import React from 'react';
import { View, Button } from 'react-native';
import TaskList from '../components/TaskList';

export default class listeTaches extends React.Component {

    render()
    {
        return(
            <View>
                <Button
                    title="Ajouter une tâche"
                    onPress={ () => { this.props.navigation.navigate("budgetEvent"); }}
                />
                <TaskList></TaskList>
            </View>
        )
    }
}