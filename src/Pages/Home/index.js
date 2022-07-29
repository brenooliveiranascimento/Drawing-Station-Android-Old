import React, { useState } from "react";
import {ScrollView, View} from 'react-native'
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
      source={require('../../assets/novosFUndos/Back.png')}>
      <View
        style={{backgroundColor:"rgba(0,0,0,0.4)", flex:1}}>
        <UserArea/>
        <ScrollView style={{marginTop:15}}>
          <CardsContainer>
            <CardRoute navegador={navigation} updateModal={setShowModal}/>
          </CardsContainer>
        </ScrollView>
        </View>
        <Modal 
         animationType='slide'
         transparent={true}
         visible={showModal}>
          <ModalComponent 
            updateModal={setShowModal}/>
        </Modal>
      </BackGround>
    )
  }

export default Home

