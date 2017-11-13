import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { open } from '../utils/LinkingHelper';

const isSmallScreen = Dimensions.get('window').width <= 360;

const SocialBarButton = ({ style, text, image, link }) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={() => open(link)}
  >
    <Image style={styles.image} source={{ uri: image }} />
  </TouchableOpacity>
);

SocialBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

const styles = StyleSheet.create({
  container: {
    width: isSmallScreen ? 80 : 100,
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
