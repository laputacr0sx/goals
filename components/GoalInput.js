import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from 'react-native';
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
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal2.png')}
				/>

				<TextInput
					style={styles.inputField}
					placeholder={'My Course Goals'}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							color={'#1d033f'}
							title='Add Goal'
							onPress={addGoalHandler}
						/>
					</View>
					<View style={styles.button}>
						<Button color={'#cd0a79'} title='Cancel' onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 14,
		backgroundColor: '#dac0fc',
	},
	inputField: {
		color: '#1d033f',
		fontSize: 18,
		borderWidth: 1.5,
		borderColor: '#f1e7fe',
		backgroundColor: '#f1e7fe',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		marginTop: 14,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 80,
		height: 80,
		margin: 20,
	},
});

export default GoalInput;
