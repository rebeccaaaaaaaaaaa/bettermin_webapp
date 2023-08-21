"use client";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "@/services/baseUrl";

interface ItemsProps {
  children: ReactNode;
}

interface ItemsContextData {}

export const ItemsContext = createContext<ItemsContextData>(
  {} as ItemsContextData
);

export function ItemsProvider({ children }: ItemsProps) {
  return <ItemsContext.Provider value={{}}>{children}</ItemsContext.Provider>;
}
