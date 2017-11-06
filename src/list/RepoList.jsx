import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';

const RepoItem = ({ title }) => (
  <View>
    <Text>{title}</Text>
    <Text>Some description here</Text>
  </View>
);

const RepoList = ({ items }) => {
  return items.map((data, index) => <RepoItem {...data} id={index} />);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  repoItem: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '80'
  }
});

RepoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default RepoList;
