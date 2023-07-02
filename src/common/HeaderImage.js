import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HeaderImage = ({src, showMenu, showNotifications}) => {
  return (
    <View style={styles.header}>
      <Text>Hi</Text>
    </View>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    width: 20,
    height: 20,
  },
  headerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
