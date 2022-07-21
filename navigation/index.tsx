import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../screens/HomeScreen"
import PlannerScreen from "../screens/PlannerScreen"
import { Text } from "react-native"
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 

export default function Navigation() {
	return(
		<NavigationContainer> {/* Navigation Container */}
			<RootNavigator />
		</NavigationContainer>
	)
}


const Stack = createNativeStackNavigator(); // Creating the stack

function RootNavigator() {
	return (
		<Stack.Navigator> {/* Stack navigatons and initial screen */}
			<Stack.Screen  
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }} // Hide header
			/>
		</Stack.Navigator>
	)
}

// Creating bottom navigator
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	return(
		<BottomTab.Navigator initialRouteName="Home">
			<BottomTab.Screen 
				name="Home"
				component={HomeScree}	
				options={{
					tabBarIcon: ({color, size}) => <FontAwesome5 name="home" size={size} color={color} />
				}}
			/>
			<BottomTab.Screen 
				name="Planner" 
				component={PlannerScreen}
				options={{
					tabBarIcon: ({color, size}) => <Entypo name="add-to-list" size={size} color={color} />
				}}
			/>
		</BottomTab.Navigator>
	)
}