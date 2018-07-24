import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  ScrollView
} from 'react-native';
import { isWeb, webOnly } from '../utils/WebHelper';
import { open } from '../utils/LinkingHelper'

const ImageSlider = ({ images }) => (
  <ScrollView style={styles.imageSlider} horizontal={true}>
    {images.map((image, index) => (
      <Image style={styles.image} source={image} key={index} />
    ))}
  </ScrollView>
);

const Divider = () => (
  <View
    style={{
      width: '100%',
      backgroundColor: '#000000',
      height: 2,
      marginTop: 30,
      opacity: 0.1
    }}
  />
);

const renderYear = year =>
  isWeb ? (
    <Text style={styles.itemYear}>{year}</Text>
  ) : (
      <View style={styles.itemYear}>
        <Text style={styles.itemYearText}>{year}</Text>
      </View>
    );

const RepoItem = ({ name, images, desc, year }) => (
  <TouchableOpacity onPress={() => open(`/project/${name}`, '_self')}>
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemName}>{name}</Text>
        {renderYear(year)}
      </View>

      <Text numberOfLines={1} style={styles.itemDesc}>
        {desc}
      </Text>

      {images ? <ImageSlider images={images} /> : null}

      <Divider />
    </View>
  </TouchableOpacity>
);

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.number)
  ]),
  desc: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  itemContainer: {
    minHeight: 120,
    padding: 20
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 12
  },
  itemDesc: {
    fontSize: 13,
    fontWeight: '200',
    marginTop: 10
  },
  itemYearText: {
    fontSize: 12,
    color: '#EEE'
  },
  itemYear: {
    ...webOnly({ fontSize: 12, color: '#EEE' }),
    backgroundColor: '#222',
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 10,
    paddingLeft: 10
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 50,
    borderColor: '#333',
    borderWidth: 1
  },
  imageSlider: {
    flex: 1,
    marginTop: 20
  }
});

export default RepoItem;
