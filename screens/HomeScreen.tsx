import { View, Text, Button } from "react-native"

export default function HomeScreen ({navigation}: any) {
	
	return(
		<View>
			<Text>I am home screen</Text>
			<Button 
				title="Go to Planner"
				onPress={() => navigation.push("Planner")} //On click go to PlannerScreen
			/>
		</View>
	)
}