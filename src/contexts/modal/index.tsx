"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ModalProps {
  children: ReactNode;
}

interface ModalContextData {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log("Contexto de Modal criado.");
  }, []);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
