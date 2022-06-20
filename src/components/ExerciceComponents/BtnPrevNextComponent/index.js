import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts';
import { BtnNext, BtnPrev, BtnPrevNextcontainer, TextBtn } from './styles';

export default function BtnPrevNextComponent() {
  const {exerciceData, difiuldade, setExerciceSelected, indexExer, setIndexExer} = useContext(AuthContext);

  const nextprevExercice = (ref) => {
    if(ref) {
      setIndexExer(indexExer + 1);
      setExerciceSelected(exerciceData[difiuldade][indexExer + 1]);
      return
    }
    setIndexExer(indexExer - 1);
    setExerciceSelected(exerciceData[difiuldade][indexExer - 1]);
  }

 return (
   <BtnPrevNextcontainer>
        
   {
     !indexExer ? (
       <BtnPrev
         onPress={() => alert('Este é o Primeiro exercicio')}>
         <TextBtn>Anterior</TextBtn>
       </BtnPrev>
     ) : (
       <BtnPrev
         onPress={() => nextprevExercice(false)}>
         <TextBtn>Anterior</TextBtn>
       </BtnPrev>
     )
   }

   {
     exerciceData[difiuldade].length === indexExer +1 ? (
       <BtnNext
         onPress={() => alert('Este é o ultiumo exercicio')}>
         <TextBtn>Proximo</TextBtn>
       </BtnNext>
     ) : (
     <BtnNext
       onPress={() => nextprevExercice(true)}>
       <TextBtn>Próximo</TextBtn>
     </BtnNext>
     )
   }
   </BtnPrevNextcontainer>
  );
}