import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Settings() {
  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Configurações</h1>
        </div>
      </div>
    </>
  );
}
