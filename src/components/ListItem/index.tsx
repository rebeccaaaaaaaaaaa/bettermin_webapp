"use client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { FiHeart, FiFile, FiXCircle } from "react-icons/fi";
import { Modal } from "../Modal";
import { useEditor } from "@/hooks/useEditor";
import dynamic from "next/dynamic";
import { useItems } from "@/hooks/useItems";

interface ListItemProps {
  id: number;
  title: string;
  createdAt: string;
  favorite: boolean;
  onFavoriteClick: () => void; // Adicione a função como uma prop
  onDelete: (id: number) => void
}


const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export function ListItem({title, createdAt, onFavoriteClick, onDelete, id, favorite} : ListItemProps) {  
  const [itemFavorite, setItemFavorite] = useState(favorite);
  const { showModal } = useModal();
  const [currentModal, setCurrentModal] = useState("");

  const handleShowModal = (modalId: string) => {
    setCurrentModal(modalId);
    showModal(modalId);
  };

  const handleFavoriteClick = () => {
    setItemFavorite(!itemFavorite); // Inverta o estado de favorito do item
    onFavoriteClick(); // Chame a função de clique em favorito para atualizar o estado no componente pai
  };

  const { editorState, handleEditorStateChange, setEditorState } = useEditor();

  return (
    <>
      <li className="flex justify-between items-center bg-gray-200 p-5 mb-5 rounded-md cursor-pointer hover:bg-gray-300 transition-all">
        <div>
          <h1 className="text-lg"> {title} </h1>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex items-center justify-around gap-2">
        <button
            className={`bg-primary rounded p-1 flex items-center justify-around gap-2 text-white ${
              itemFavorite ? "bg-red-900" : ""
            }`}
            title="Favoritar"
            onClick={handleFavoriteClick} // Use a função de clique em favorito
          >
            <FiHeart color="#fff" />
          </button>
          <button
            className="bg-green-500 rounded p-1 flex items-center justify-around gap-2 text-white"
            title="Editar"
            onClick={() => handleShowModal("edit")}
          >
            <FiFile color="#fff" />
          </button>
          <button
            className="bg-red-500 rounded p-1 flex items-center justify-around gap-2 text-white"
            title="Apagar"
            onClick={() => handleShowModal("delete")} // Chame a função 'onDelete' e passe o 'id'
          >
            <FiXCircle color="#fff" />
          </button>
        </div>
      </li>
      {currentModal === "delete" && (
        <Modal
          title="Deseja apagar o registro?"
          action={() => {
            onDelete(id)
          }}
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
