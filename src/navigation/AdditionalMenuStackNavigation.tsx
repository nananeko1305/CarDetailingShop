import { createStackNavigator } from "@react-navigation/stack";
import AdditionalMenuScreen from "../screens/AdditionalMenuScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AdditionalMenuStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AdditionalMenuScreen"
        component={AdditionalMenuScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AdditionalMenuStackNavigation;
