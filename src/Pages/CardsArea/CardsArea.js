import React, { useContext, useState } from 'react';
import { ScrollView, View } from 'react-native';
import CardExercices from '../../components/CardExercices/CardExercices';
import { AuthContext } from '../../Contexts';
import { CardsContainer } from '../Home/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/headerBack';
import { BackGround } from './CardsAreaSyles';
import {Modal} from 'react-native';
import SelectDifiulty from '../../components/SelectDifiulty/SelectDificulty';
import ModalComponent from '../../components/CardExercices/ModalComponent';
import CardMessage from '../../components/CardExercices/CardMessageComponent/CardMessage';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function CardsArea() {
  const {exerciceData, difiuldade} = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  // const [dificulty] = useState('basics')

    return (
      <BackGround
        source={require('../../assets/novosFUndos/Back.png')}>
        <View
        style={{backgroundColor:"rgba(0,0,0,0.3)", flex:1}}>
          <Header/>
          <CardMessage navegador={navigation}/>
          <ProgressBar/>
          <SelectDifiulty/>
          <ScrollView>
            <CardsContainer>
                <CardExercices
                    navegador={navigation}
                    cardInf={exerciceData[difiuldade]}
                    updateModal={setShowModal}/>
            </CardsContainer>
          </ScrollView>
          </View>
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

export default CardsArea;