import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ReistrationScreen from "../screens/RegistrationScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

const StackAuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ReistrationScreen" component={ReistrationScreen} />
    </Stack.Navigator>
  );
};

export default StackAuthNavigation;
