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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default LinearGradient;
