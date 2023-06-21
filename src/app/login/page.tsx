"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/modelo-bg-waves-02.jpg')]">
      <div className="flex h-[100vh] items-center justify-end pr-96">
        <form className="flex flex-col bg-[#ffffff6e] p-8 rounded-lg shadow-lg w-96">
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
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <button className="bg-primary text-white py-2 rounded-md hover:opacity-[0.9] text-center">
            <Link href="/home">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
