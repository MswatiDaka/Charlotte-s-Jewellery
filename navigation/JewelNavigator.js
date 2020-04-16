import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import AppointmentScreen from "../screens/AppointmentScreen";

const JewelNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Home: HomeScreen,
    Appointments: AppointmentScreen
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center"
    }
  }
);

export default createAppContainer(JewelNavigator);
