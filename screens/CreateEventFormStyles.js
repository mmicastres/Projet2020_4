import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: '#fff',
	},

	titres: {
		fontSize:30,
		alignContent: "center",
		justifyContent: "center",
		textAlign: 'center',
		margin: 10,
	},

	formDescr: {
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},

	form: {
		height: 40,
		width: 250,
		borderWidth : 1,
		alignContent: 'center',
		justifyContent: 'center',
		margin: 10,
	},

	formName: {
		height: 40,
		width: 250,
		borderWidth : 1,
		justifyContent: 'center',
		margin: 10,
	},

	formGuests: {
		height: 40,
		width: 50,
		borderWidth : 1,
		margin: 10,
	},

	formDescrEvent: {
		textAlignVertical: 'top',
		borderWidth : 1,
		marginTop: 10,
		width: 350,
		height: 140,
		marginBottom: 25,
	},

	dateEvent: {
		margin: 10,
		textAlign: 'center',
		fontSize: 20,
	},

	submitButton: {
		textAlignVertical: 'top',
		alignContent: 'center',
		textAlign: 'center',
		height: 100,
		backgroundColor:'#5ff',
		color: '#fff',
	},

	submitButtonText: {
		textAlignVertical: 'center',
		alignContent: 'center',
		textAlign: 'center',
		height: 100,
		backgroundColor:'#0f0',
		color: '#fff',
		fontSize: 40,
	}
});