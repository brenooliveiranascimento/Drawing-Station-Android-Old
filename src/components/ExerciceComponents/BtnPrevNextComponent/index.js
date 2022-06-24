import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts';
import { AreaColum, BtnNext, BtnPrev, BtnPrevNextcontainer, TextBtn, TextBtnName, TextBtnNameNext, TextBtnNext } from './styles';
import Icon from 'react-native-vector-icons/Feather'

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
           <AreaColum>
             <TextBtn>Anterior</TextBtn>
             <TextBtnName>End Line!</TextBtnName>
           </AreaColum>
       </BtnPrev>
     ) : (
       <BtnPrev
         onPress={() => nextprevExercice(false)}>
          <Icon
            size={30}
            color="white"
            name='chevron-left'
            />
           <AreaColum>
            <TextBtn>Anterior</TextBtn>
            <TextBtnName>{exerciceData[difiuldade][indexExer-1].name}</TextBtnName>
           </AreaColum>
       </BtnPrev>
     )
   }

   {
     exerciceData[difiuldade].length === indexExer +1 ? (
       <BtnNext
         onPress={() => alert('Este é o ultiumo exercicio')}>
           <AreaColum>
            <TextBtnNext>Próximo</TextBtnNext>
            <TextBtnNameNext>End Line!</TextBtnNameNext>
           </AreaColum>
         
       </BtnNext>
     ) : (
     <BtnNext
       onPress={() => nextprevExercice(true)}>
         <AreaColum>
           <TextBtnNext>Próximo</TextBtnNext>
           <TextBtnNameNext>{exerciceData[difiuldade][indexExer+1].name}</TextBtnNameNext>
         </AreaColum>
         <Icon
            size={30}
            color="white"
            name='chevron-right'
            />
     </BtnNext>
     )
   }
   </BtnPrevNextcontainer>
  );
}