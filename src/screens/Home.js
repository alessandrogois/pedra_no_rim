import React, {useContext} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Card, FAB, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../App';
import {HeathTextCard} from '../components/HeathTextCard';

export const Home = ({navigation}) => {
  const {counter, increment, decrement} = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/drinking_bg.jpg')}
        resizeMode="cover"
        style={styles.imageBg}>
        <StatusBar backgroundColor="#042e87" animated={true} />
        <View style={styles.header}>
          <Icon
            name="gear"
            size={24}
            style={styles.icon}
            color="#005BB0"
            onPress={() => navigation.navigate('Config')}
          />
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollVIew}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={50}
          decelerationRate="fast"
          pagingEnabled>
          <HeathTextCard
            title="A importância de beber água"
            description="Nosso corpo é constituido de cerca de 60% a 70% de água.
              Nosso sangue, músculos, pulmões e cérebro contém bastante água.
              Beber bastante líquido é vital para a nossa saúde."
          />
          <HeathTextCard
            title="Seu corpo precisa!"
            description="Todas as células de nosso corpo necessitam de água. Nosso cérebro,
              por exemplo, consiste em 90% de água, portanto, se não suprimos
              corretamente a necessidade de água em nosso corpo, nosso cérebro
              pode não funcionar bem, causando dores de cabeça e enxaqueca."
          />
          <HeathTextCard
            title="Seus rins!"
            description="A água é considerada o solvente universal e auxilia na liberação
              das toxinas filtradas pelo rim, através da urina. "
          />
        </ScrollView>
        <View>
          <Card style={styles.infoCard}>
            <Title style={styles.infoCardTitle}>
              Quantos copos você já bebeu hoje?
            </Title>
            <Title style={styles.counterText}>{counter}</Title>
          </Card>
        </View>
        <FAB
          style={styles.fabPlus}
          icon="plus"
          color="#fff"
          //onPress={() => navigation.navigate('Config')}
          onPress={increment}
        />
        <FAB
          style={styles.fabMinus}
          icon="minus"
          color="#fff"
          //onPress={() => navigation.navigate('Config')}
          onPress={decrement}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fabMinus: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    backgroundColor: '#037ffc',
  },
  fabPlus: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: '#037ffc',
  },
  counterText: {
    marginTop: 30,
    color: '#005BB0',
    textAlign: 'center',
    fontSize: 90,
    padding: 60,
  },
  infoCardTitle: {
    color: '#033A7E',
    fontWeight: 'bold',
  },
  infoCard: {
    margin: 10,
    padding: 10,
    height: 200,
    borderRadius: 15,
    elevation: 5,
    opacity: 0.98,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width - 20,
  },
  scrollVIew: {
    height: 400,
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
    marginTop: 10,
  },
  header: {
    width: '100%',
    height: 40,
    opacity: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'flex-end',
  },
  imageBg: {
    flex: 1,
    opacity: 0.98,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
