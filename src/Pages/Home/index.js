import React from "react";
import {ScrollView} from 'react-native'
import { BackGround, CardsContainer } from "./HomeStyles";
import UserArea from "../../components/UserArea/UserArea";
import { useNavigation } from "@react-navigation/native";
import CardRoute from "../../components/CardRoute";

function Home(){
  const navigation = useNavigation();
    return (
      <BackGround
      source={require('../../assets/BackgroundDesfoque.png')}>
        <UserArea/>
        <ScrollView style={{marginTop:15}}>
          <CardsContainer>
            <CardRoute navegador={navigation}/>
          </CardsContainer>
        </ScrollView>
      </BackGround>
    )
  }

export default Home
