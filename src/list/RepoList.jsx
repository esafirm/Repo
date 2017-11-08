import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RepoItem from './RepoItem';

const RepoList = ({ items }) => {
  return items.map((data, index) => <RepoItem {...data} key={index} />);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

RepoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default RepoList;
