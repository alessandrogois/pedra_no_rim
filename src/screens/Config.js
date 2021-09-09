import React from 'react';
import {View, Text, Button} from 'react-native';

export const Config = ({navigation}) => {
  return (
    <View>
      <Text>Config</Text>
      <Button title="Dosage" onPress={() => navigation.navigate('Dosage')} />
    </View>
  );
};
