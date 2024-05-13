"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const { handleSubmit, setUser, setPassword, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleUserValue = (e: string) => {
    setUser(e);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/modelo-bg-waves-02.jpg')]">
      <div className="flex h-[100vh] items-center justify-end pr-96">
        <div className="flex flex-col bg-[#ffffff6e] p-8 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center justify-center">
            <Image src={Logo} alt="Logo Better Mind" width={100} />
            <h1 className="text-3xl font-bold mb-4 text-primary">
              Better Mind
            </h1>
          </div>
          <form className="flex flex-col align-middle">
          <input
            type="text"
            placeholder="Usuário"
            className="border border-gray-300 rounded-md p-2 mb-4"
            onChange={(e) => handleUserValue(e.target.value)}
            required
          />
          <div className="mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={handleShowPassword}
              // deixar o botão de mostrar senha dentro do input
              className="text-primary absolute ml-[-2rem] top-[58.5%] "
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
         {
          loading ? (
            <button
              type="submit"
              className="bg-primary text-white rounded-md p-2 text-center"
              disabled
            >
              Carregando...
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary text-white rounded-md p-2 text-center"
            >
              Entrar
            </button>
          )
         }
          </form>
        </div>
      </div>
    </div>
  );
}
