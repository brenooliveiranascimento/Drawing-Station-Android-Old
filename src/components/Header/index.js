import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Container } from "./styles";
import Icon from 'react-native-vector-icons/Feather'

export default function Header(){
    return(
        <ImageBackground
        source={require('../../assets/HEadImage.png')}
        style={{
            width: '100%',
            height: 60,
            justifyContent:'space-between',
            flexDirection:'row',
        }}
        > 

        <TouchableOpacity>
            <Icon
            style={{
                margin:10,
                marginTop:15
            }}
            name="menu"
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

        <TouchableOpacity>
            <Icon
            style={{
                margin:10,
                marginTop:15
            }}
            name="message-square"
            size={30}
            color="#fff"
            />
        </TouchableOpacity>
            

        </ImageBackground>
    );
}