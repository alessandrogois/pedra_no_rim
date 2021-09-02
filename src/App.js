import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => (
  <SafeAreaView>
    <StatusBar animated={true} backgroundColor="#00296b" />
    <LinearGradient colors={['#00296b', '#3b599b', '#3b5998']}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Hello world</Text>
      </View>
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  textTitle: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default App;
