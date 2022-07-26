import {View, Text, StyleSheet} from "react-native"
import { Workout } from "../types/data"


export default function WorkoutItem({item}: {item: Workout}) {
	
	return(
		<View style={styles.container}>
			<Text style={style.name}>{item.name}</Text>
			<Text style={style.duration}>Duration: {item.duration}</Text>
			<Text style={style.difficulty}>Difficulty: {item.difficulty}</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		borderColor: "rgba(0,0,0, 0.1)",
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		backgroundColor: "#fff"
	},
	name: {
		fontSize: 15,
		fontWeight: "bold",
		marginBottom: 5
	},
	duration: {
		fontSize: 15
	},
	difficulty: {
		fontSize: 15
	}
})
