import { View, Text, Button } from "react-native"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"

export default function HomeScreen ({navigation}: NativeStackHeaderProps) {
	
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