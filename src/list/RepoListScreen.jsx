import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import RepoList from './RepoList';

class RepoListScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <RepoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default RepoListScreen;
