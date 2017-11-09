import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import RepoItem from './RepoItem';

const RepoList = ({ items }) => {
  return (
    <ScrollView>
      {items.map((data, index) => <RepoItem {...data} key={index} />)}
    </ScrollView>
  );
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
