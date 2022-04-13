import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{
				text: enteredGoalText,
				id: Math.floor(Math.random() * 9999).toString(),
			},
		]);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />

			<View style={styles.goalContainer}>
				<FlatList
					data={courseGoals}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalContainer: {
		flex: 5,
	},
});
