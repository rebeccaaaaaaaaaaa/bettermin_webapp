"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { EditorState } from "draft-js";

interface EditorProps {
  children: ReactNode;
}

interface EditorContextData {
  editorState: EditorState;
  handleEditorStateChange: (newEditorState: any) => void;
  setEditorState: (newEditorState: any) => void;
}

export const EditorContext = createContext({} as EditorContextData);

export function EditorProvider({ children }: EditorProps) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize the editor state

  const handleEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState); // Update the editor state
  };
  useEffect(() => {
    console.log("Contexto de Editor criado.");
  }, []);
  return (
    <EditorContext.Provider
      value={{
        editorState,
        handleEditorStateChange,
        setEditorState,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
