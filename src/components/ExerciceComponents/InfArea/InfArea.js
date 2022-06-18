import React from 'react';
import { BtnFinalizar, TextBase } from '../../../StylesGerais';
import { AuthContext } from '../../../Contexts';
import Icon from 'react-native-vector-icons/Feather';
import { InfContainer, MaterialArea, MaterialText, Name } from './InfStyles';
import MaterialAreaContainer from '../MaterialArea/MaterialArea';

class InfArae extends React.Component {
  constructor() {
    super()

    this.state = {
      viewMaterial: false,
    }
    this.showMaterial = this.showMaterial.bind(this);
  }

  showMaterial() {
    this.setState((oldState) => ({
      viewMaterial: !oldState.viewMaterial
    }));
  }

  static contextType = AuthContext
  render() {
    const {exerciceSelected, updateProgress, user} = this.context;
    const {viewMaterial} = this.state;
    return (
      <InfContainer>
        <Name>{exerciceSelected.name}</Name>
        <MaterialArea
          onPress={this.showMaterial}
          activeOpacity={0.9}>
          <MaterialText>
            Materiais nescessarios
          </MaterialText>
          <Icon
            style={{marginTop:4}}
            color={'white'}
            size={16}
            name={viewMaterial ? "arrow-up" : "arrow-down"}/>
        </MaterialArea>
          {viewMaterial && (
            <MaterialAreaContainer item={exerciceSelected}/>
          )}
        <BtnFinalizar
          onPress={() => updateProgress(exerciceSelected.name)}>
          <TextBase>Finalizado</TextBase>
          <Icon 
            style={{ marginTop:5, marginLeft:10}} 
            size={17} 
            color={'#fff'} 
            name={!user[exerciceSelected.name] ? "circle" : "check-circle"}/>
        </BtnFinalizar>
      </InfContainer>
    );
  }
}

export default InfArae;