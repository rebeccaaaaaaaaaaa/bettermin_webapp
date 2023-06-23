'use client';
import { useContext } from "react";
import { EditorContext } from "../contexts/editor";

export function useEditor() {
  const value = useContext(EditorContext);
  return value;
}
