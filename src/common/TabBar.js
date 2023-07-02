import React from 'react';

import {View, Pressable, Dimensions, StyleSheet, Image} from 'react-native';
import NavigationIcon from './NavIcon';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        // const {options} = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        if (route.name === 'ModalScreen') {
          return (
            <View
              style={[
                styles.mainItemContainer,
                {
                  position: 'absolute',
                  marginLeft: width * 0.5,
                  bottom: 55,
                  zIndex: 1,
                },
              ]}>
              <Image
                key={index}
                source={require('../asset/plus.png')}
                style={{
                  width: 55,
                  height: 55,
                  position: 'absolute',
                }}
              />
            </View>
          );
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.mainItemContainer}>
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused ? '#030D16' : '#113862',
                borderRadius: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 10,
                }}>
                <NavigationIcon route={route} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#113862',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#113862',
  },
});

export default TabBar;
