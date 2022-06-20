import React, { useContext, useState } from 'react';
import CardExercices from '../../components/CardExercices/CardExercices';
import { AuthContext } from '../../Contexts';
import { CardsContainer } from '../Home/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/headerBack';
import { BackGround } from './CardsAreaSyles';
import {Modal} from 'react-native';
import SelectDifiulty from '../../components/SelectDifiulty/SelectDificulty';
import ModalComponent from '../../components/CardExercices/ModalComponent';

function CardsArea() {
  const {exerciceData, difiuldade} = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  // const [dificulty] = useState('basics')

    return (
      <BackGround
        source={require('../../assets/BackgroundDesfoque.png')}>
          <Header/>
          <SelectDifiulty/>
          <CardsContainer>
           {
              exerciceData[difiuldade].map((exercice) => (
                <CardExercices
                  navegador={navigation}
                  cardInf={exercice}
                  updateModal={setShowModal}
                  key={exercice.name}/>
              ))
              }
          </CardsContainer>
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