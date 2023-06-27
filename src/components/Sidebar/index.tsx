"use client";
import { useState, useContext } from "react";
import { useMenu } from "../../hooks/useMenu";
import { WelcomeBar } from "../WelcomeBar";
import { Modal } from "../Modal";
import { ModalContext } from "@/contexts/modal";
import { Navlink } from "../NavLink";
import { useAuth } from "@/hooks/useAuth";

export function Sidebar() {
  const { isSidebarOpen } = useMenu();
  const { handleLogout, userName } = useAuth();
  const { showModal } = useContext(ModalContext);
  const [currentModal, setCurrentModal] = useState("");

  const handleShowModal = (modalId: string) => {
    setCurrentModal(modalId);
    showModal(modalId);
  };

  return (
    <>
      <div
        className={`w-1/6 bg-gray-800 text-white ${
          isSidebarOpen ? "block" : "hidden"
        } transition-all duration-500`}
      >
        <nav className="text-gray-400">
          <Navlink href="/home" linkName="Página Inicial" />
          <Navlink href="/all" linkName="Todas" />
          <Navlink href="/favorites" linkName="Favoritas" />
          <Navlink href="/settings" linkName="Configuraçõoes" />

          <span
            className="block p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleShowModal("logout")}
          >
            Sair
          </span>
        </nav>
      </div>
      {currentModal === "logout" && (
        <Modal
          title="Deseja sair da aplicação?"
          action={() => {
            handleLogout();
          }}
          hide={() => setCurrentModal("")}
        >
          <p className="my-4 text-slate-500 text-lg leading-relaxed">
            Você tem certeza que deseja sair?
          </p>
        </Modal>
      )}
    </>
  );
}
