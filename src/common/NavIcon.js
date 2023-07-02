import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const NavigationIcon = ({route}) => {
  let src = require('../asset/bell_icon.png');

  //   if (route.name === 'HomeStack') {
  //     src = require('../asset/home.png');
  //   }
  // if (route.name === 'CalanderStack') {
  //   src = require('../asset/calander.png');
  // }
  // if (route.name === 'ChatStack') {
  //   src = require('../asset/chat.png');
  // }
  // if (route.name === 'DonateStack') {
  //   src = require('../asset/donate.png');
  // }
  return <Image source={src} style={styles.image} resizeMode="contain" />;
};

export default memo(NavigationIcon);

const styles = StyleSheet.create({
  image: {width: 25, height: 25},
});
