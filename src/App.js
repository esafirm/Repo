import React from 'react';
import { AppRegistry } from 'react-native';
import { View, StyleSheet, Dimensions } from 'react-native';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import RepoDetailScreen from './detail/RepoDetailScreen';
import ReportListScreen from './list/RepoListScreen';

class App extends React.Component {
  renderScreen(pageId) {
    if (pageId === 'list') {
      return <ReportListScreen />;
    } else {
      return <RepoDetailScreen />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Router>
            <Route
              path="/page/:pageId"
              render={({ match }) => this.renderScreen(match.params.pageId)}
            />
          </Router>
        </View>
      </View>
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
    shadowOpacity: '0.7',
    shadowColor: '#333',
    shadowRadius: 15
  }
});

export default App;
