import React from 'react'
import { View, Text, Button } from 'react-native'

export const Home = ({navigation}) => {
    return (
        <View>
            <Text></Text>
            <Button title="Config" onPress={() => navigation.navigate("Config")}></Button>
        </View>
    )
}
