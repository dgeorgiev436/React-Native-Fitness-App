import { View, Text, Button } from "react-native"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"

export default function PlannerScreen ({navigation}: NativeStackHeaderProps) {

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