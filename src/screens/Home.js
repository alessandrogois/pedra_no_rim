import React, {useContext} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  Card,
  FAB,
  Portal,
  Button,
  Subheading,
  Paragraph,
  Title,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContext} from '../App';
import drinkingBg from '../assets/drinking_bg.jpg';

export const Home = ({navigation}) => {
  const {counter, increment, decrement} = useContext(AppContext);
  return (
    <View
      style={{
        // backgroundColor: '#003399',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../assets/drinking_bg.jpg')}
        resizeMode="cover"
        style={{flex: 1, opacity: 0.95}}>
        <StatusBar
          backgroundColor="#042e87"
          //translucent={true}
          animated={true}
        />
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            width: `${100 * 3}%`,
            height: 400,
            marginBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled>
          <Card
            style={{
              margin: 10,
              padding: 20,
              elevation: 5,
              borderRadius: 15,
              height: 280,
              width: Dimensions.get('screen').width - 20,
              alignItems: 'center',
            }}>
            <Subheading style={{fontSize: 20}}>
              A importância de beber água
            </Subheading>
            <Paragraph>
              Nosso corpo é constituido de cerca de 60% a 70% de água. Nosso
              sangue, músculos, pulmões e cérebro contém bastante água. Beber
              bastante líquido é vital para a nossa saúde.
            </Paragraph>
          </Card>
          <Card
            style={{
              margin: 10,
              padding: 20,
              elevation: 5,
              borderRadius: 15,
              height: 280,
              width: Dimensions.get('screen').width - 20,
              alignItems: 'center',
            }}>
            <Subheading style={{fontSize: 20}}>Seu corpo precisa!</Subheading>
            <Paragraph>
              Todas as células de nosso corpo necessitam de água. Nosso cérebro,
              por exemplo, consiste em 90% de água, portanto, se não suprimos
              corretamente a necessidade de água em nosso corpo, nosso cérebro
              pode não funcionar bem, causando dores de cabeça e enxaqueca.
            </Paragraph>
          </Card>
          <Card
            style={{
              margin: 10,
              padding: 20,
              elevation: 5,
              borderRadius: 15,
              height: 280,
              width: Dimensions.get('screen').width - 20,
              alignItems: 'center',
            }}>
            <Subheading style={{fontSize: 20}}>Seus rins!</Subheading>
            <Paragraph>
              A água é considerada o solvente universal e auxilia na liberação
              das toxinas filtradas pelo rim, através da urina. A escassez de
              água no organismo pode ser identificada através de alguns sintomas
              como:
            </Paragraph>
            <Paragraph> - Mu​cosas secas;</Paragraph>
            <Paragraph> - Pressão baixa;</Paragraph>
            <Paragraph> - Ressecamento de pele;</Paragraph>
            <Paragraph>
              - Maior concentração da urina, o que a torna mais escassa e mais
              escura.
            </Paragraph>
          </Card>
        </ScrollView>
        <View>
          <Card
            style={{
              margin: 10,
              padding: 10,
              height: 200,
              borderRadius: 15,
              opacity: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: Dimensions.get('screen').width - 20,
            }}>
            <Title style={{color: '#002299'}}>
              Quantos copos você já bebeu hoje?
            </Title>
            <Title
              style={{
                marginTop: 30,
                color: '#002299',
                textAlign: 'center',
                fontSize: 90,
                padding: 60,
              }}>
              {counter}
            </Title>
          </Card>
        </View>
        <FAB
          style={{
            position: 'absolute',
            right: 20,
            bottom: 40,
            backgroundColor: '#037ffc',
          }}
          icon="plus"
          color="#fff"
          //onPress={() => navigation.navigate('Config')}
          onPress={increment}
        />
        <FAB
          style={{
            position: 'absolute',
            left: 20,
            bottom: 40,
            backgroundColor: '#037ffc',
          }}
          icon="minus"
          color="#fff"
          //onPress={() => navigation.navigate('Config')}
          onPress={decrement}
        />
      </ImageBackground>
    </View>
  );
};
