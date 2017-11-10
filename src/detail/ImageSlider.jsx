import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const renderImageItems = images =>
  images.map((image, index) => (
    <TouchableOpacity
      style={styles.item}
      key={index}
      onPress={() => window.open(image)}
    >
      <Image style={styles.image} source={image} resizeMode={'cover'} />
    </TouchableOpacity>
  ));

const ImageSlider = ({ style, images }) => (
  <ScrollView
    horizontal
    style={[style, styles.container]}
    contentContainerStyle={styles.scrollContainer}
  >
    {images ? renderImageItems(images) : null}
  </ScrollView>
);

ImageSlider.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE'
  },
  scrollContainer: {
    width: '100%',
    height: '100%'
  },
  item: {
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImageSlider;
