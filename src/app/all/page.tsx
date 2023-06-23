"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Modal } from "@/components/Modal";
import { ModalContext } from "@/contexts/modal";
import { EditorState } from "draft-js";
import { useContext, useEffect, useState } from "react";
import { FiFile, FiHeart, FiXCircle } from "react-icons/fi";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function All() {
  const { showModal } = useContext(ModalContext);
  const [currentModal, setCurrentModal] = useState("");

  const handleShowModal = (modalId: string) => {
    setCurrentModal(modalId);
    showModal(modalId);
  };

  const handleEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState); // Update the editor state
  };

  const [isClient, setIsClient] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize the editor state

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Todos</h1>
          <div>
            <ul>
              <li className="flex justify-between items-center bg-gray-200 p-5 rounded-md cursor-pointer hover:bg-primary hover:text-white transition">
                <div>
                  <h1 className="text-lg"> Mais um relato </h1>
                  <p>28/10/2022</p>
                </div>
                <div className="flex items-center justify-around gap-2">
                  <button className="bg-blue-500 rounded p-1" title="Favoritar">
                    <FiHeart color="#fff" />
                  </button>
                  <button
                    className="bg-green-500 rounded p-1"
                    title="Editar"
                    onClick={() => handleShowModal("edit")}
                  >
                    <FiFile color="#fff" />
                  </button>
                  <button
                    className="bg-red-500 rounded p-1"
                    title="Apagar"
                    onClick={() => handleShowModal("delete")}
                  >
                    <FiXCircle color="#fff" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {currentModal === "delete" && (
        <Modal
          title="Deseja apagar o registro?"
          action={() => {}}
          hide={() => setCurrentModal("")}
        >
          <p className="my-4 text-slate-500 text-lg leading-relaxed">
            Apagar registro? Essa ação não poderá ser desfeita.
          </p>
        </Modal>
      )}
      {currentModal === "edit" && (
        <Modal
          title="Editar registro"
          action={() => {}}
          hide={() => setCurrentModal("")}
        >
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
        </Modal>
      )}
    </>
  );
}
