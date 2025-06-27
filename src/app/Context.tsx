"use client"
import { createContext, useState, useContext, ReactNode } from 'react';

interface OverlayContextType {
  welcome:boolean,
  overlay: boolean;
  toggleOverlay: () => void;
  changeWelcome: () => void;
}

const defaultContextValues: OverlayContextType = {
  welcome:true,
  overlay: false,
  toggleOverlay: () => {},
  changeWelcome: () => {},  
};

const OverlayContext = createContext<OverlayContextType>(defaultContextValues);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [overlay, setOverlay] = useState<boolean>(defaultContextValues.overlay);
  const [welcome,setWelcome]= useState<boolean>(defaultContextValues.welcome);

  const toggleOverlay = () => setOverlay(prev => !prev);
  const changeWelcome = () => setWelcome(false);
  return (
    <OverlayContext.Provider value={{ welcome, changeWelcome, overlay, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  return useContext(OverlayContext);
};
