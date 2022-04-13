import { StyleSheet, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [moalIsVisible, setModalIsVisible] = useState(false);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{
				text: enteredGoalText,
				id: Math.floor(Math.random() * 9999).toString(),
			},
		]);
		endAddGoalHandler();
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	return (
		<>
			<StatusBar />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color={'#5e0acc'}
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={moalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>

				<View style={styles.goalContainer}>
					<FlatList
						data={courseGoals}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: '#f1e7fe',
	},
	goalContainer: {
		flex: 5,
	},
});

/**
 * 
 * #1d033f
#5e0acd
#dac0fc
#f1e7fe
#ecfdd5
#e2fcc0

#0a79cd
#0a17cd
#5e0acd
#c00acd
#cd0a79


 */
