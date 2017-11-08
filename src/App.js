import React from 'react';
import { View, StyleSheet } from 'react-native';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import RepoDetailScreen from './detail/RepoDetailScreen';
import RepoListScreen from './list/RepoListScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Route exact path="/" component={RepoListScreen} />
          <Route
            path="/project/:name"
            render={({ match }) => <RepoDetailScreen {...match} />}
          />
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    shadowOpacity: 0.7,
    shadowColor: '#333',
    shadowRadius: 15
  }
});

export default App;
