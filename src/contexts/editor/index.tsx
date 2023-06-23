"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

interface EditorProps {
  children: ReactNode;
}

interface EditorContextData {
  editorState: EditorState;
  handleEditorStateChange: (newEditorState: any) => void;
  setEditorState: (newEditorState: any) => void;
  textTitle: string;
  setTextTitle: (newTextTitle: string) => void;
  handelSubmit: () => void;
}

export const EditorContext = createContext({} as EditorContextData);

export function EditorProvider({ children }: EditorProps) {
  const [textTitle, setTextTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };

  const handelSubmit = () => {
    const contentHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log("Titulo: ", textTitle, "Conteudo: ", contentHtml);
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
        textTitle,
        setTextTitle,
        handelSubmit,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
