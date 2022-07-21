import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen  from "../screens/HomeScreen"
import PlannerScreen  from "../screens/PlannerScreen"


const Stack = createNativeStackNavigator(); // Creating the stack

export default function Navigation() {
	return(
		<NavigationContainer> {/* Navigation Container */}
			<Stack.Navigator initialRouteName="Home"> {/* Stack navigatons and initial screen */}
				<Stack.Screen  
					name="Home"
					component={HomeScree}
				/>
				<Stack.Screen 
					name="Planner" 
					component={PlannerScreen}
				/> {/* All screens in the stack */}
			</Stack.Navigator>
		</NavigationContainer>
	)
}