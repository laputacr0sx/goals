import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
	return (
		<View style={styles.itemContainer}>
			<Pressable
				android_ripple={{ color: '#dddddd' }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.itemText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	itemText: { color: '#f1e7fe', fontSize: 14, padding: 8 },
});

export default GoalItem;
