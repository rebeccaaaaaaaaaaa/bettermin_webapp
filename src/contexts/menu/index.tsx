'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MenuProps {
  children: ReactNode;
}

interface MenuContextData {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const MenuContext = createContext({} as MenuContextData);

export function MenuProvider({ children }: MenuProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
