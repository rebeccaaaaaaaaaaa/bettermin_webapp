"use client";
import { useContext } from "react";
import { ModalContext } from "./../contexts/modal";

export function useModal() {
  const value = useContext(ModalContext);
  return value;
}
