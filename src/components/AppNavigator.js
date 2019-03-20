import { createStackNavigator, createAppContainer } from "react-navigation";

//import Login from "../screens/loginForm";
import Register from "../screens/registerForm";
import ForgotPassword from "../screens/forgotPasswordForm";
import Dashboard from "../screens/dashboard";
import LoginNew from "../screens/loginFormNew";








const AppNavigator = createStackNavigator({
  //  loginForm: { screen: Login },
    loginFormNew:{screen:LoginNew},
    registerForm: { screen: Register },
    forgotPasswordForm: { screen: ForgotPassword },
    dashboard  :{screen:Dashboard}
},
// {
//     navigationOptions:{
//         header:false,
//     }
//},
    {
            initialRouteName : 'loginFormNew'
    });
const Container = createAppContainer(AppNavigator)
export default Container;




// import { DrawerNavigator } from "react-navigation";
// const Drawer=DrawerNavigator({
//     dashboard:{screen:Dashboard}
// })

// const Drawer=createAppContainer(DrawerNavigator)

// export default Drawer
