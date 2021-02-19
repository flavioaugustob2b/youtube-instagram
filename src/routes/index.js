import React from 'react';
import { Image } from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Feed from '../screens/Feed'

import camera from '../../assets/image/camera.png';
import logo from '../../assets/image/logo.png';
import igtv from '../../assets/image/igtv.png';
import send from '../../assets/image/send.png';


const MainNavigator = createStackNavigator({
    Feed: Feed
}, {
  defaultNavigationOptions: {
    headerTitle: <Image source={camera} />
  }
});

export default createAppContainer(MainNavigator);