import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Container } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";

export default function Header(){

  const navigation = useNavigation();

    return(
        <ImageBackground
        style={{
            width: '100%',
            height: 60,
            justifyContent:'space-between',
            flexDirection:'row',
        }}
        > 

        <TouchableOpacity
        onPress={() => { navigation.goBack() }}
        >
            <Icon
            style={{
                margin:10,
                marginTop:15
            }}
            name="arrow-left"
            size={30}
            color="#fff"
            />
        </TouchableOpacity>

            <Image
        source={require('../../assets/LogoCruasemFundo.png')}
            style={{
                marginLeft:-100,
                width: 200,
                height: 100,
                marginTop:-25
            }}
            />
            

        </ImageBackground>
    );
}