import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import RepoInfo from './RepoInfo';
import RepoDetailHeader from './RepoDetailHeader';
import ImageSlider from './ImageSlider';

import portofolio from '../data/portofolio';

class RepoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props.params;
    this.selectedProject = portofolio.filter(p => p.name === name)[0];
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageSlider {...this.selectedProject} style={styles.imageSlider} />
        <View style={styles.header}>
          <RepoDetailHeader />
        </View>
        <RepoInfo {...this.selectedProject} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageSlider: {
    flex: 1,
    height: Dimensions.get('window').height - 200
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%'
  }
});

export default RepoDetailScreen;
