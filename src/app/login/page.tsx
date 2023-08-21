"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const { handleSubmit, setUser, setPassword, showErrorAlert } = useAuth();

  const handleUserValue = (e: string) => {
    setUser(e);
  };
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/modelo-bg-waves-02.jpg')]">
      {showErrorAlert && (
        <p className="text-red-500 text-center">Usuário ou senha inválidos</p>
      )}
      <div className="flex h-[100vh] items-center justify-end pr-96">
        <div className="flex flex-col bg-[#ffffff6e] p-8 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center justify-center">
            <Image src={Logo} alt="Logo Better Mind" width={100} />
            <h1 className="text-3xl font-bold mb-4 text-primary">
              Better Mind
            </h1>
          </div>
          <input
            type="text"
            placeholder="Usuário"
            className="border border-gray-300 rounded-md p-2 mb-4"
            onChange={(e) => handleUserValue(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-300 rounded-md p-2 mb-4"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="bg-primary text-white py-2 rounded-md hover:opacity-[0.9] text-center"
            type="submit"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
