import React, { createContext, useState, useEffect } from "react";
import { Animated } from 'react-native'
export const AnimationContext = createContext();

export default function AnimationProvider({children}) {
  const [leftPosition, setLeftPosition] = useState(new Animated.Value(-1000))
  const [rightPosition, setRightPosition] = useState(new Animated.Value(-1000))
  const [logoAnimation, setLogoAnimation] = useState(new Animated.Value(0));
  const [homeState, setHomeState] = useState('basicos')
  const [estado, setEstado] = useState(false);

  const [moveHome, setMoveHome] = useState(new Animated.Value(1000))

  const moveBasicExit = (f) => {
    Animated.sequence([
      Animated.timing(
        moveHome,{
          toValue:0,
          duration:300
        }
      ),
      Animated.timing(
        moveHome,{
          toValue:1000,
          duration:200
        }
      )
    ]).start()
    setTimeout(() => {
      changeHomeState(f)
    } , 500)
  }


  function moveBasic(f) {
    Animated.sequence([
      Animated.timing(
        moveHome,{
          toValue:0,
          duration:300
        }
      ),
      Animated.timing(
        moveHome,{
          toValue:10,
          duration:200
        }
      )
    ]).start()
  }

  
  function exitAnimation() {
    
    Animated.timing(
      leftPosition,{
        toValue:-1000,
        duration:300,
      }
    ).start()
    Animated.timing(
      rightPosition,{
        toValue:-1000,
        duration:300,
      }
    ).start()
    Animated.timing(
      logoAnimation,{
        toValue:0,
        duration:300,
      }
    ).start()

    setTimeout(()=>{
      Animated.sequence([
        Animated.timing(
          leftPosition,{
            toValue:70,
            duration:300,
          }
        ),
        Animated.timing(
          leftPosition,{
            toValue:50,
            duration:100,
          }
        ),

      ]).start()

  Animated.sequence([
    Animated.timing(
      rightPosition,{
        toValue:50,
        duration:300,
      }
    ),
    Animated.timing(
      rightPosition,{
        toValue:10,
        duration:100,
      }
    )
  ]).start()
  Animated.timing(
    logoAnimation,{
      toValue:!estado ? 300 : 200,
      duration:300,
    }
  ).start()
    },4000)
}

function changeState() {
  Animated.sequence([
    Animated.timing(
      logoAnimation,{
        toValue:0,
        duration:300,
      }
    ),
    Animated.timing(
      logoAnimation,{
        toValue:estado ? 300 : 200,
        duration:300,
      }
    ),
  ]).start()
  Animated.sequence([
    Animated.timing(
      leftPosition,{
        toValue:-1000,
        duration:300,
      }
    ),
    Animated.timing(
      leftPosition,{
        toValue:70,
        duration:300,
      }
    ),
    Animated.timing(
      leftPosition,{
        toValue:50,
        duration:100,
      }
    ),
  ]).start()

  Animated.sequence([
    Animated.timing(
      rightPosition,{
        toValue:-1000,
        duration:300,
      }
    ),

    Animated.timing(
      rightPosition,{
        toValue:50,
        duration:300,
      }
    ),
    Animated.timing(
      rightPosition,{
        toValue:10,
        duration:100,
      }
    )
  ]).start()
    setTimeout(()=>{
      setEstado(estado ? false : true);
    },300)
}

function callAnimation() {
  Animated.timing(
    logoAnimation,{
      toValue:!estado ? 300 : 200,
      duration:300,
    }
  ).start()
  Animated.sequence([
    Animated.timing(
      leftPosition,{
        toValue:70,
        duration:300,
      }
    ),
    Animated.timing(
      leftPosition,{
        toValue:50,
        duration:100,
      }
    ),
  ]).start()

  Animated.sequence([
    Animated.timing(
      rightPosition,{
        toValue:50,
        duration:300,
      }
    ),
    Animated.timing(
      rightPosition,{
        toValue:10,
        duration:100,
      }
    )
  ]).start()
}

useEffect(()=>{
    callAnimation()
},[])

function changeHomeState(f) {
  setHomeState( homeState === f ? null : f);
  moveBasic()
}

  return(
    <AnimationContext.Provider
    value={{
      leftPosition,
      rightPosition,
      logoAnimation,
      exitAnimation,
      callAnimation,
      changeState,
      estado,
      homeState,
      changeHomeState,
      moveHome,
      moveBasic,
      moveBasicExit,
    }}
    >
      {children}
    </AnimationContext.Provider>
  )

  
}