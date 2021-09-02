import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';

const App = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Text style={styles.textTitle}>Hello world</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  textTitle: {
    fontSize: 24,
  },
});

export default App;
