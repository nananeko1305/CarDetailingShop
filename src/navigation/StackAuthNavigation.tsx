import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SplashScreen from "../screens/SplashScreen";
import BottomBarNavitaion from "./BottomBarNavigation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={BottomBarNavitaion} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
