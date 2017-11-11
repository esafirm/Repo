import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import RepoList from './RepoList';
import SocialBar from './SocialBar';

import items from '../data/portofolio';

class RepoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SocialBar />
        <RepoList items={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RepoListScreen;
