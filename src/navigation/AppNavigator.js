import { createStackNavigator, createAppContainer } from "react-navigation";

//import Login from "../screens/loginForm";
import Register from "../screens/registerForm";
import ForgotPassword from "../screens/forgotPasswordForm";
import Dashboard from "../screens/dashboard";
import LoginNew from "../screens/loginFormNew";
import ResetPassword from "../screens/resetPasswordForm";








const AppNavigator = createStackNavigator({
  //  loginForm: { screen: Login },
    loginFormNew:{screen:LoginNew},
    registerForm: { screen: Register },
    forgotPasswordForm: { screen: ForgotPassword },
    dashboard  :{screen:Dashboard},
    resetPasswordForm:{screen:ResetPassword}
},
// {
//     navigationOptions:{
//         header:false,
//     }
//},
    {
            initialRouteName : 'dashboard'
    });
const Container = createAppContainer(AppNavigator)
export default Container;



