import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {Card, Subheading, Paragraph} from 'react-native-paper';

export const HeathTextCard = props => {
  const {width} = Dimensions.get('window');

  return (
    <Card style={[{width: width - 20}, styles.cardContainer]}>
      <Subheading style={styles.title}>{props.title}</Subheading>
      <Paragraph>{props.description}</Paragraph>
      <ImageBackground
        source={require('../assets/cup.png')}
        height={100}
        resizeMode="contain"
        style={styles.imgCardBg}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  imgCardBg: {
    flex: 1,
    opacity: 0.9,
    margin: 20,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#033A7E',
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    elevation: 5,
    borderRadius: 15,
    height: 280,
    opacity: 0.98,
    alignItems: 'center',
  },
});
