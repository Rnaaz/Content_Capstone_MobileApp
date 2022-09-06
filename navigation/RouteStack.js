import OnBoardingList from '../components/OnBoardingList';
import ContentDetails from '../components/ContentDetails';
import TabNavigator from './TabNavigator';
import Login from '../components/LoginScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens ={
Login: {
    screen: Login
},
OnBoardingList:{
    screen: OnBoardingList
},
TabNavigator: {
    screen: TabNavigator
},
ContentDetails: {
    screen: ContentDetails
}

} 

const RouteStack = createStackNavigator(screens);

export default createAppContainer(RouteStack);