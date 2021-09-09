import React from 'react'
import { View, Text, Button } from 'react-native'

export const Home = ({navigation}) => {
    return (
        <View>
            <Text>Config</Text>
            <Button title="Config" onPress={() => navigation.navigate("Config")}></Button>
        </View>
    )
}
