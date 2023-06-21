"use client";
import { useState } from "react";
import { useMenu } from "../../hooks/useMenu";
import { WelcomeBar } from "../WelcomeBar";
import { Modal } from "../Modal";
import { useModal } from "@/hooks/useModal";

export function Sidebar() {
  const { isSidebarOpen } = useMenu();
  const { setShowModal } = useModal();
  return (
    <>
      <div
        className={`w-1/6 bg-gray-800 text-white ${
          isSidebarOpen ? "block" : "hidden"
        } transition-all duration-500`}
      >
        <WelcomeBar />
        <nav className="text-gray-400">
          <a href="/home" className="block p-4 hover:bg-gray-700">
            Página Inicial
          </a>
          <a href="/all" className="block p-4 hover:bg-gray-700">
            Todas
          </a>
          <a href="/favorites" className="block p-4 hover:bg-gray-700">
            Favoritas
          </a>
          <a href="/settings" className="block p-4 hover:bg-gray-700">
            Configurações
          </a>
          <span
            className="block p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Sair
          </span>
        </nav>
      </div>
      <Modal title="Deseja sair da aplicação?" action={() => console.log('AÇÃO PARA APGAR UM REGISTRO')}>
        <p className="my-4 text-slate-500 text-lg leading-relaxed">
          Você tem certeza que deseja sair?
        </p>
      </Modal>
    </>
  );
}
