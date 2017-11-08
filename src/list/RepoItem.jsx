import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

const RepoItem = ({ name, images, desc }) => (
  <TouchableOpacity>
    <Image style={styles.itemContainer} source={images ? images[0] : null}>
      <View style={styles.itemScrim}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDesc} numberOfLines={2} ellipsizeMode={'tail'}>
          {desc.length > 180 ? desc.substring(0, 180) + '…' : desc}
        </Text>
      </View>
    </Image>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    minHeight: 120
  },
  itemScrim: {
    flex: 1,
    backgroundColor: '#00000099',
    padding: 24
  },
  itemName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600'
  },
  itemDesc: {
    fontSize: 13,
    fontWeight: '200',
    marginTop: 10,
    color: '#EEE'
  }
});

export default RepoItem;