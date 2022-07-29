import React, {useContext, useState} from 'react';
import { View, Modal, ScrollView } from 'react-native';
import { BackgroundExercice } from '../../StylesGerais';
import Header from '../../components/Header/headerBack'
import PlayerAula from '../../components/ExerciceComponents/Player/Playes';
import InfArae from '../../components/ExerciceComponents/InfArea/InfArea';
import BtnPrevNextComponent from '../../components/ExerciceComponents/BtnPrevNextComponent';
import ModalReference from '../../components/ExerciceComponents/ModalReference';
import { AuthContext } from '../../Contexts';
import BtnShowReference from '../../components/ExerciceComponents/BtnShowReference/ShowReference';
function Exercicios() {
  const [showModal,setSHowModal] = useState(false);
  const {exerciceSelected} = useContext(AuthContext);

  return (
    <BackgroundExercice
    source={require('../../../src/assets/novosFUndos/BackInvertido.png')}>
      <View
        style={{backgroundColor:"rgba(0,0,0,0.4)", flex:1}}>
        <Header/>
        <PlayerAula/>
        <ScrollView>
          <InfArae/>
          {
            exerciceSelected.reference !== '' && (
              <BtnShowReference setModal={() => setSHowModal(!showModal)}/>
            )
          }
        <BtnPrevNextComponent/>
        </ScrollView>
      </View>
      <Modal 
        transparent={true}
        animationType='slide'
        visible={showModal}>
          <ModalReference setModal={() => setSHowModal(!showModal)}/>
      </Modal>
    </BackgroundExercice>
   );
 }

 export default Exercicios;
