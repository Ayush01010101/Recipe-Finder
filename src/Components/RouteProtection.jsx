import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserDataContext } from '../Context/UserDataContext';

export default function RouteProtection({ children }) {
  const { data } = useContext(UserDataContext);

  if (data?.user?.user_metadata?.email_verified) {
    return children;
  } else {

    return <Navigate to="/login" replace />;
  }
}