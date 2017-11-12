import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ style }) => (
  <View style={[styles.container, style]}>
    <Image
      style={styles.image}
      source={{
        uri:
          'https://avatars3.githubusercontent.com/u/1691440?s=400&u=04daa13d7839d4980f2583a5cf1d31aa39375b4d&v=4'
      }}
    />
    <Text style={styles.title}>ESA FIRMAN</Text>
    <Text style={styles.bio}>Learn. Rant. Code. Repeat</Text>
  </View>
);

Header.propTypes = {
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
    fontWeight: '600',
    color: '#FFF'
  },
  bio: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '100',
    color: '#DDD'
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
