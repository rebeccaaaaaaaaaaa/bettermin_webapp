"use client";
import { useContext } from "react";
import { ItemsContext } from "../contexts/items";

export function useItems() {
  const value = useContext(ItemsContext);
  return value;
}
