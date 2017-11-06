import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import SocialBarButton from './SocialBarButton';

const socialBarItems = [
  {
    text: 'Github',
    image:
      'https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-64.png',
    link: 'https://github.com/esafirm'
  },
  {
    text: 'Facebook',
    image:
      'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-64.png',
    link: 'https://facebook.com/esa.firman.3'
  },
  {
    text: 'LinkedIn',
    image:
      'https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-64.png',
    link: 'https://www.linkedin.com/in/esa-firman-01b8096b/'
  }
];

const SocialBar = () => (
  <View style={styles.container}>
    {socialBarItems.map((item, index) => (
      <SocialBarButton {...item} id={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 2px -2px rgba(0,0,0,0.2)'
  }
});

SocialBar.propTypes = {};
export default SocialBar;
