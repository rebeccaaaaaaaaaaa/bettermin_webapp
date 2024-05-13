'use client';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { LoggedWarning } from "@/components/LoggedWarning";
import { useAuth } from "@/hooks/useAuth";

export default function Settings() {
  const { isLogged } = useAuth();
  return (
    <>
     {
      isLogged ? (
        <>
          <Header />
          <div className="flex h-[100vh] w-[100vw]">
            <Sidebar />
            <div className="w-3/4 mx-auto mt-8">
              <h1 className="font-bold text-2xl mb-3">Configurações</h1>
            </div>
          </div>
        </>
      ) : (
        <LoggedWarning />
      )
     }
    </>
  );
}
