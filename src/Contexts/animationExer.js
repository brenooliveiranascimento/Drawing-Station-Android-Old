import React, { createContext, useState, useEffect } from "react";
import { Animated } from 'react-native'
export const AnimationExerContext = createContext();

export default function AnimationExerProvider({children}){
  const [value, setValue] = useState(new Animated.Value(1000));
  const [selected, changeSelected] = useState('');
  const [ballCheck, setBallCheck] = useState('')

  const setSelected = (i) => {
    moveExit()
    setTimeout(() =>{
    changeSelected(selected == i ? '' : i)
    }, 300)
  }

  const setSelectedBall = (i) => {
    moveExit()
    setTimeout(() =>{
      setBallCheck(selected == i ? '' : i)
    }, 300)
  }

  const moveExit = () => {
    Animated.sequence([
      Animated.timing(
        value,{
          toValue:0,
          duration:100
        }
      ),
      Animated.timing(
        value,{
          toValue:1000,
          duration:300
        }
      )
    ]).start()
    setTimeout(() => {
      moveEnter()
    }, 400)
  }

  const moveEnter = () => {
    Animated.sequence([
      Animated.timing(
        value,{
          toValue:0,
          duration:300
        }
      ),
      Animated.timing(
        value,{
          toValue:10,
          duration:100
        }
      )
    ]).start();
  }

  return(
    <AnimationExerContext.Provider
    value={{
      value,
      moveEnter,
      moveExit,
      setSelected,
      selected,
      setSelectedBall,
      ballCheck
    }}
    >
      {children}
    </AnimationExerContext.Provider>
  )
}