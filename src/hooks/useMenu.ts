'use client';
import { useContext } from "react";
import { MenuContext } from "../contexts/menu";

export function useMenu() {
  const value = useContext(MenuContext);
  return value;
}
