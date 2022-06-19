/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { AuthContext } from '../../Contexts';
import { Card, Container, Details, NameOfRoute, PorcentText, ProgressArea, ProgressBar, ProgressBarColored, ProgressInNumber} from './CarDStyles';

export default class CardRoute extends Component {
  constructor() {
    super();

    this.verifyRoute = this.verifyRoute.bind(this);
  }
  static contextType = AuthContext;

  verifyRoute(pilar) {
    const {navegador, updateModal} = this.props;
    if(pilar.conclude) {
      navegador.navigate('CardsArea')
      return
    }
    updateModal(true)
    return;
  }

 render(){
   const {pilares, user, exerciceData} = this.context;
   const calculePorcento = ( 100 / exerciceData.basics.length) * user.all
   console.log(calculePorcento)
  return (
    <Container>
      {
        pilares.items.map((pilar) => (
          <Card
            onPress={() => this.verifyRoute(pilar)}
            activeOpacity={0.8} 
            key={pilar}>
            <NameOfRoute>
              {pilar.name}
            </NameOfRoute>
            <Details>{pilar.details}</Details>
            <ProgressArea>

              {pilar.id === 'Pintura' && (
                <>
                <ProgressBar/>
                <ProgressBarColored concludes={calculePorcento}/>
                <ProgressInNumber>
                  <PorcentText>{calculePorcento}%</PorcentText>
                </ProgressInNumber>
              </>
              )}
                
            </ProgressArea>
          </Card>
        ))
      }
    </Container>
   );
 }
}