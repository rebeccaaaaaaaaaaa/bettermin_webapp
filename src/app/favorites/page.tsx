import { FiFile, FiHeart, FiXCircle } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Favorites() {
  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Favoritos</h1>
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
                  <button className="bg-green-500 rounded p-1" title="Editar">
                    <FiFile color="#fff" />
                  </button>
                  <button className="bg-red-500 rounded p-1" title="Apagar">
                    <FiXCircle color="#fff" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
