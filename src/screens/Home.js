import React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Card, FAB, Portal} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Home = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#003399',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <StatusBar
      //backgroundColor="transparent"
      //translucent={true}
      //animated={true}
      />
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: `${100 * 3}%`, height: 200}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        <Card
          style={{
            margin: 10,
            height: Dimensions.get('screen').height / 2,
            width: Dimensions.get('screen').width - 20,
          }}>
          <Text>Teste</Text>
        </Card>
        <Card
          style={{
            margin: 10,
            height: Dimensions.get('screen').height / 2,
            width: Dimensions.get('screen').width - 20,
          }}>
          <Text>Teste</Text>
        </Card>
        <Card
          style={{
            margin: 10,
            height: Dimensions.get('screen').height / 2,
            width: Dimensions.get('screen').width - 20,
          }}>
          <Text>Teste</Text>
        </Card>
      </ScrollView>
      <View style={{backgroundColor: 'gray', flex: 1}}>
        <Card style={{margin: 10}}>
          <Text>Teste</Text>
        </Card>
      </View>
      <FAB
        style={{
          position: 'absolute',
          right: 20,
          bottom: 40,
          backgroundColor: 'white',
        }}
        r
        icon="plus"
        color="#000099"
        onPress={() => navigation.navigate('Config')}
      />
    </View>
  );
};
