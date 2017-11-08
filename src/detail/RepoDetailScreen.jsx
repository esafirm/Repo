import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RepoDetailHeader from './RepoDetailHeader';

import portofolio from '../data/portofolio';

class RepoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props.params;
    this.selectedProject = portofolio.filter(p => p.name == name)[0];
  }

  render() {
    return (
      <View style={styles.container}>
        <RepoDetailHeader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RepoDetailScreen;
