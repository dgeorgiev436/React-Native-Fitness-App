import { View, Text, Button } from "react-native"

export default function PlannerScreen ({navigation}: any) {
	
	return(
		<View>
			<Text>I am planner screen</Text>
			<Button 
				title="Go to home"
				onPress={() => navigation.push("Home")}
			/>
		</View>
	)
}