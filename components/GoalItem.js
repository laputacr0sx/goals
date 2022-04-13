import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.itemText}>{props.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	itemText: { color: 'white', fontSize: 14 },
});

export default GoalItem;
