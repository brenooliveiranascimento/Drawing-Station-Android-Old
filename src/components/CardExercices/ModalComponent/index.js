/* eslint-disable react/prop-types */
import React from 'react';
import { BackGround, ModalContainer, ModalHeader, ModalHEaderBtn, TextHeaderModal, TextModal } from './styleModal';
import Icon from 'react-native-vector-icons/Feather';

class ModalComponent extends React.Component {
  render() {
    const {updateModal} = this.props;
    return (
      <BackGround>
        <ModalContainer>
          <ModalHeader>
            <ModalHEaderBtn
              onPress={() => updateModal(false)}>
              <TextHeaderModal>X</TextHeaderModal>
            </ModalHEaderBtn>
          </ModalHeader>
          <TextHeaderModal
            style={{alignSelf:'center'}}>
              Aréa em construção 
            <Icon
              size={23}
              color={'white'}
              name='alert-octagon'/>
            </TextHeaderModal>
            <TextModal>
            Essa aréa ainda está em construção! mas volte aqui daqui algumas luas marujo!
          </TextModal>
          <TextModal>
            Quer ficar por dentro das futuras atualizações? então me siga nas redes socias
          </TextModal>
        </ModalContainer>
      </BackGround>
    )
  }
}

export default ModalComponent