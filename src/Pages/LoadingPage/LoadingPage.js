import React, { useContext, useLayoutEffect, useCallback } from 'react';
import { Background } from '../../StylesGerais';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { AnimationContext } from '../../Contexts/animation';

export default function LoadingPage() {
  const {
    logoAnimation,
    logoView
  } = useContext(AnimationContext);
  useLayoutEffect(
    useCallback(() => {
      logoView()
    })
  )
 return (
   <Background
    source={require('../../assets/novosFUndos/Back.png')}
   >
     <Animated.Image
        style={{width: logoAnimation, height: 100}}
        source={require('../../assets/LogoCruasemFundo.png')}
        />
      <LottieView
        style={{width: 350, marginBottom:120}}
        source={require('../../Lottie/animationData.json')}
        autoPlay
      />
        {/* <LottieView
        style={{width: 150, marginTop:-80}}
        source={require('../../Lottie/lf30_editor_0ktlr6ix.json')}
        autoPlay
      /> */}
   </Background>
  );
}