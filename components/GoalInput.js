import { StyleSheet, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('');

	function goalInputHandler(enteredGoalText) {
		setEnteredGoalText(enteredGoalText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.inputField}
				placeholder={'My Course Goals'}
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title='Add Goal' onPress={addGoalHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	inputField: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
});

export default GoalInput;