import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from '../images';

console.log('icons', Icons);

const BadgeButton = ({ onPress, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={icon}
      style={styles.badgeIcon}
      resizeMode={'stretch'}
      draggable={false}
    />
  </TouchableOpacity>
);

const renderStore = link => (
  <View style={styles.storeContainer}>
    {link.playstore ? (
      <BadgeButton
        icon={Icons.googleBadge}
        onPress={() => window.open(link.playstore)}
      />
    ) : null}

    {link.appStore ? (
      <BadgeButton
        icon={Icons.appleBadge}
        onPress={() => window.open(link.appStore)}
      />
    ) : null}
  </View>
);

const RepoInfo = ({ name, desc, link }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.desc}>{desc}</Text>
    {link ? renderStore(link) : null}
  </View>
);

RepoInfo.propTypes = {
  name: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    shadowOpacity: 0.7,
    shadowColor: '#333',
    shadowRadius: 15
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 20
  },
  desc: {
    paddingBottom: 30
  },
  badgeIcon: {
    width: 150,
    height: 50,
    marginLeft: 5,
    marginRight: 5
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RepoInfo;
