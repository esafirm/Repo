import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialBarButton = ({ style, text, image, link }) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onClick={() => window.open(link)}
  >
    <Image style={styles.image} source={image} />
  </TouchableOpacity>
);

SocialBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 32,
    height: 32
  }
});

export default SocialBarButton;
