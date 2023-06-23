"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useContext, useEffect, useState } from "react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { Header } from "../../components/Header";
import { useMenu } from "../../hooks/useMenu";
import { Sidebar } from "../../components/Sidebar";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
export default function Home() {
  const { isSidebarOpen } = useMenu();

  const [isClient, setIsClient] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize the editor state

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  const handleEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState); // Update the editor state
  };

  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-lg mb-4"
            placeholder="Dê um titulo ao seu relato"
          />
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={handleEditorStateChange}
            editorStyle={{
              height: "calc(60vh - 100px)",
              border: "1px solid #eee",
              padding: "0 16px",
            }}
          />
          <button className="mr-4 mt-3 bg-green-600 text-white rounded-full flex items-center gap-1 p-2">
            Salvar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
