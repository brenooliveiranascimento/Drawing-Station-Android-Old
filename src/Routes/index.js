import React, { useContext, useState } from 'react';
import AuthRoutes from './Auth.routes';
import { AuthContext } from '../Contexts';
import AppRoutes from './App.routes';
import LoadingPage from '../Pages/LoadingPage/LoadingPage';

export default function Routes() {
  const { user,  } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  const loadingPageTime = () => setTimeout(() => setLoading(false), 5000);

  if(loading) {
    loadingPageTime();
    return(
      <LoadingPage />
    )
  }
 return (
  user ? <AppRoutes/> : <AuthRoutes/> 
  );
}