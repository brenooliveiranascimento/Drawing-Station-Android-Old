import React, { useState } from "react";
import {ScrollView} from 'react-native'
import { BackGround, CardsContainer } from "./HomeStyles";
import UserArea from "../../components/UserArea/UserArea";
import { useNavigation } from "@react-navigation/native";
import CardRoute from "../../components/CardRoute";
import ModalComponent from "../../components/CardExercices/ModalComponent";
import {Modal} from 'react-native';

function Home(){
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
    return (
      <BackGround
      source={require('../../assets/BackgroundDesfoque.png')}>
        <UserArea/>
        <ScrollView style={{marginTop:15}}>
          <CardsContainer>
            <CardRoute navegador={navigation} updateModal={setShowModal}/>
          </CardsContainer>
        </ScrollView>
        <Modal 
          animationType="slide"
          visible={showModal}
          transparent>
          <ModalComponent 
            updateModal={setShowModal}/>
        </Modal>
      </BackGround>
    )
  }

export default Home
