import React, { useContext } from 'react';
import AuthRoutes from './Auth.routes';
import { AuthContext } from '../Contexts';
import LoadingIndicator from '../components/LoadingIndicator';
import AppRoutes from './App.routes';
import { BackGround } from '../Pages/StylesGerais/StylesGerais';

export default function Routes() {
  const { user, loading } = useContext(AuthContext)
  if(loading) {
    return(
      <BackGround
        source={require("../assets/BackgroundDesfoque.png")}
        >
        <LoadingIndicator/>
      </BackGround>
    )
  }
 return (
  user ? <AppRoutes/> : <AuthRoutes/> 
  );
}