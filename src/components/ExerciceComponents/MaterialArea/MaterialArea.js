/* eslint-disable react/prop-types */
import React from 'react';
import { AuthContext } from '../../../Contexts'
import { LapisContainer, TextWhite } from '../../../StylesGerais';
import { MaterialsContainer, MultiBtnArea, MultiExerciceSelectBtn, TextBtnShow } from './MaterialsStyles';

class MaterialAreaContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      nowColor: '',
      viewColor:false,
    };
    this.updateColor = this.updateColor.bind(this);
  }
  static contextType = AuthContext;

  updateColor(cor) {
    this.setState((oldState) => ({
      nowColor: cor === oldState.nowColor ? '' : cor,
      viewColor: cor === oldState.nowColor ? false : true,
    }))
  }

  render() {
    const {item} = this.props;
    const {viewColor, nowColor} = this.state;
    const colorsArray = Object.keys(item.colors).reverse();
    return (
      <MaterialsContainer>
        {item.multiExample ? (
          <>
            <MultiBtnArea>
              {colorsArray.map((cor) => (
                  <MultiExerciceSelectBtn
                    onPress={() => this.updateColor(cor)}
                    key={cor}>
                    <TextBtnShow 
                      nowColor={this.state.nowColor}
                      color={cor}>
                        {cor}
                    </TextBtnShow>
                  </MultiExerciceSelectBtn>
              ))}
            </MultiBtnArea>
            {
              viewColor && (
                item.colors[nowColor].map(({cor}) => (
                  <LapisContainer key={cor}>
                    <TextWhite>{cor}</TextWhite>
                  </LapisContainer>
                ))
              )
            }
          </>
        ) : (item.colors.map((cor) => (
          <LapisContainer key={cor}>
            <TextWhite>{cor.cor}</TextWhite>
          </LapisContainer>
        )))}
        
      </MaterialsContainer>
    )
  }
}

export default MaterialAreaContainer;