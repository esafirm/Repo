import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const renderImageItems = images =>
  images.map((image, index) => (
    <TouchableOpacity style={styles.item} key={index} onPress={() => window.open(image)}>
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
