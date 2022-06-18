import React, {useContext} from "react";
import {ScrollView} from 'react-native'
import { BackGround, CardsContainer } from "./HomeStyles";
import {AuthContext} from '../../Contexts/index'
import UserArea from "../../components/UserArea/UserArea";
// import SelectDifiulty from "../../components/SelectDifiulty/SelectDificulty";
import CardExercices from "../../components/CardExercices/CardExercices";
import { useNavigation } from "@react-navigation/native";
import { Divisoria } from "../../StylesGerais";

function Home(){
  const {exerciceData} = useContext(AuthContext);
  const navigation = useNavigation();
    return (
      <BackGround
      source={require('../../assets/backgrounddegraDesfoque1.jpg')}>
        <UserArea/>
        {/* <SelectDifiulty/> */}
        <Divisoria/>
        <ScrollView>
          <CardsContainer>
              {
              exerciceData.basics.map((exercice) => (
                <CardExercices
                  navegador={navigation}
                  cardInf={exercice}
                  key={exercice.name}/>
              ))
              }
          </CardsContainer>
        </ScrollView>
      </BackGround>
    )
  }

export default Home
