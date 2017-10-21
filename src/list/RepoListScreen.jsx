import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './Header';
import RepoList from './RepoList';
import SocialBar from './SocialBar';

const items = [
  {
    title: 'Something Something'
  },
  {
    title: 'Item #2'
  },
  {
    title: 'Some item again #3'
  }
];

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
