import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const LinearGradient = ({ style, children, colors }) => (
  <View
    children={children}
    style={{
      ...style,
      backgroundImage: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`
    }}
  />
);

LinearGradient.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.shape({})
};

export default LinearGradient;
