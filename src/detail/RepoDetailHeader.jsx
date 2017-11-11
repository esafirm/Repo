import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from '../components/LinearGradient';
import Icons from '../images';

const Toolbar = () => (
  <LinearGradient
    style={styles.toolbar}
    colors={['rgba(0, 0, 0, 0.2)', 'transparent 100%']}
  >
    <TouchableOpacity
      style={styles.toolbarBackButton}
      onPress={() => window.open('/', '_self')}
    >
      <Image style={styles.toolbarBackButtonImage} source={Icons.arrowBack} />
    </TouchableOpacity>
  </LinearGradient>
);

const RepoDetailHeader = props => (
  <View style={styles.container}>
    <Toolbar />
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    width: '100%'
  },
  toolbarBackButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#222',
    borderRadius: 24
  },
  toolbarBackButtonImage: {
    width: 24,
    height: 24,
    borderRadius: 12
  }
});

export default RepoDetailHeader;
