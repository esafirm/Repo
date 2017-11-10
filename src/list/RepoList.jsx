import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import RepoItem from './RepoItem';

const RepoList = ({ items }) => {
  return (
    <ScrollView>
      {items.map((data, index) => <RepoItem {...data} key={index} />)}
    </ScrollView>
  );
};

RepoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default RepoList;
