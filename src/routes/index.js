import React, { Fragment } from 'react';
import { TouchableOpacity , Image, View } from 'react-native';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Feed from '../screens/Feed'

import camera from '../../assets/image/camera.png';
import logo from '../../assets/image/logo.png';
import igtv from '../../assets/image/igtv.png';
import send from '../../assets/image/send.png';


const MainNavigator = createStackNavigator({
    // Feed: Feed
    Feed: Feed
}, {
  defaultNavigationOptions: {
    headerTitle: () => <Image source={logo} />,
    headerLeft: () => (
      <TouchableOpacity style={{ marginLeft: 20 }}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
    headerRight: ()=> (
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Image source={igtv} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Image source={send} />
        </TouchableOpacity>
      </View>
    )

  }
});

export default createAppContainer(MainNavigator);