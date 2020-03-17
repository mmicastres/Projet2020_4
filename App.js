import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Accueil from './screens/Accueil';
import CreateEventForm from './screens/CreateEventForm';
import budgetEvent from './screens/budgetEvent';
import listeInvites from './screens/listeInvites';
import listeTaches from './screens/listeTaches';
import ajoutTaches from './screens/ajoutTaches';
import AjoutInvite from './screens/AjoutInvite';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Krevent"
            options={{title: 'Krevent',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={Accueil}
          />
          <Stack.Screen
            name="Créer un évènement"
            options={{title: 'Créer un évènement',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={CreateEventForm}
          />
          <Stack.Screen
            name="Saisir un budget"
            options={{title: 'Saisir un budget',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={budgetEvent}
          />
          <Stack.Screen
            name="Liste des invités"
            options={{title: 'Liste des invités',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={listeInvites}
          />
          <Stack.Screen
            name="Liste des tâches"
            options={{title: 'Liste des tâches',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={listeTaches}
          />
          <Stack.Screen
            name="Ajouter une tâche"
            options={{title: 'Ajouter une tâche',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={ajoutTaches}
          />
          <Stack.Screen
            name="Ajouter un invité"
            options={{title: 'Ajouter un invité',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff' }}
            component={AjoutInvite}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
