import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

import HeaderButton from './HeaderButton';

const Header = ({ style }) => (
  <View style={[styles.container, style]}>
    <Image
      style={styles.image}
      source={
        'https://avatars3.githubusercontent.com/u/1691440?s=400&u=04daa13d7839d4980f2583a5cf1d31aa39375b4d&v=4'
      }
    />
    <Text style={styles.title}>Esa Firman</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    background: '#333',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontColor: '#FFF',
    paddingTop: 8,
    color: '#FFF'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFF'
  }
});

Header.propTypes = {};
export default Header;
