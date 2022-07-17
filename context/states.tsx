import * as React from 'react';
import { createContext, useContext } from 'react';

export const StatesInfo = createContext(null);

export const StatesInfoContext = ({ children }) => {
  return <StatesInfo.Provider value={children}>{children}</StatesInfo.Provider>;
};

export const useStateInforContext = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    isCheckedDisclaimer,
    setIsCheckedDisclaimer,
    token,
    setToken,
    users,
    setUsers,
  } = useContext(StatesInfo);
  return {
    username,
    setUsername,
    password,
    setPassword,
    isCheckedDisclaimer,
    setIsCheckedDisclaimer,
    token,
    setToken,
    users,
    setUsers,
  };
};
