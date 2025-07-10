import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import AdditionalMenuScreen from "../screens/AdditionalMenuScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CarsScreen from "../screens/CarsScreen";
import SchedulesScreen from "../screens/SchedulesScreen";

const Stack = createStackNavigator();

const AdditionalMenuStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <Stack.Screen
        name="AdditionalMenuScreen"
        component={AdditionalMenuScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CarsScreen" component={CarsScreen} />
      <Stack.Screen name="SchedulesScreen" component={SchedulesScreen} />
    </Stack.Navigator>
  );
};

export default AdditionalMenuStackNavigation;
