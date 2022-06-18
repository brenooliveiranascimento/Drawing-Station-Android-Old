import React, {useContext, useCallback, useLayoutEffect} from "react";
import {ScrollView, Animated} from 'react-native'
import { BackGround, CardsContainer } from "./HomeStyles";
import {AuthContext} from '../../Contexts/index'
import UserArea from "../../components/UserArea/UserArea";
import SelectDifiulty from "../../components/SelectDifiulty/SelectDificulty";
import CardExercices from "../../components/CardExercices/CardExercices";
import { useNavigation } from "@react-navigation/native";
import { AnimationContext } from "../../Contexts/animation";

function Home(){
  const {moveHome, moveBasic, homeState, moveBasicExit, exitAnimation} = useContext(AnimationContext);
  const {exerciceData} = useContext(AuthContext);

  useLayoutEffect(
    useCallback(() => {
      moveBasic();
    }, []),)

  const navigation = useNavigation();
    return (
      <BackGround
      source={require('../../assets/BackgroundDesfoque.png')}>
        <UserArea/>
        <SelectDifiulty updateDificulty={moveBasicExit} exit={exitAnimation} homeState={homeState}/>
        <ScrollView>
          <Animated.View style={{marginTop: moveHome, flex: 1}}>
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
          </Animated.View>
        </ScrollView>
      </BackGround>
    )
  }

export default Home
