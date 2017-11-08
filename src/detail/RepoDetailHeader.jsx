import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from '../components/LinearGradient';

const Toolbar = () => (
  <LinearGradient
    style={styles.toolbar}
    colors={['rgba(0, 0, 0, 0.3)', 'transparent 100%']}
  >
    <TouchableOpacity style={styles.toolbarBackButton}>
      <Image
        style={styles.toolbarBackButtonImage}
        source={{
          uri:
            'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_back_48px-64.png'
        }}
        tintColor={'#FFF'}
      />
    </TouchableOpacity>
  </LinearGradient>
);

const RepoDetailHeader = props => (
  <View style={styles.container}>
    <Toolbar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    width: '100%'
  },
  toolbarBackButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  toolbarBackButtonImage: {
    width: 32,
    height: 32
  }
});

export default RepoDetailHeader;
