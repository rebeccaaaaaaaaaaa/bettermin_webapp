'use client'
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
  modals: string[];
  showModal: (modalId: string) => void;
  hideModal: (modalId: string) => void;
  isModalVisible: (modalId: string) => boolean;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProps) {
  const [modals, setModals] = useState<string[]>([]);

  const showModal = (modalId: string) => {
    setModals((prevModals) => [...prevModals, modalId]);
  };

  const hideModal = (modalId: string) => {
    setModals((prevModals) => prevModals.filter((modal) => modal !== modalId));
  };

  const isModalVisible = (modalId: string) => {
    return modals.includes(modalId);
  };

  return (
    <ModalContext.Provider
      value={{
        modals,
        showModal,
        hideModal,
        isModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
