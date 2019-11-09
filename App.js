import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { colors } from "./src/constants/colors";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={colors.white}
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={styles.appContainer}>
        <Home />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

export default App;