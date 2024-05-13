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
import axios from "axios";
import { baseUrl } from "@/services/baseUrl";

interface EditorProps {
  children: ReactNode;
}

interface EditorContextData {
  editorState: EditorState;
  handleEditorStateChange: (newEditorState: any) => void;
  setEditorState: (newEditorState: any) => void;
  textTitle: string;
  setTextTitle: (newTextTitle: string) => void;
  handleSubmit: () => void;
}

export const EditorContext = createContext({} as EditorContextData);

export function EditorProvider({ children }: EditorProps) {
  const [textTitle, setTextTitle] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = () => {
    console.log("Salvando...");
    const contentHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    const url = baseUrl + "api/items";
    const data = {
      title: textTitle,
      content: contentHtml,
      favorite: favorite,
    };
    try {
      axios.post(url, {
        data: data
      }).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
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
        handleSubmit,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
