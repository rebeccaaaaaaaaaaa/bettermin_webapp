"use client";
import { useItems } from "@/hooks/useItems";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ListItem } from "@/components/ListItem";

export default function All() {
  const { showAllItems, deleteItem } = useItems();

  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Todos</h1>
          <div>
            <ul>
              {showAllItems.map((item, index) => (
                <ListItem
                  key={index} // Certifique-se de adicionar uma chave única para cada elemento
                  title={item.attributes.title} // Passe o título do item
                  createdAt={item.attributes.createdAt} // Passe a data de criação do item
                  favorite={item.attributes.favorite}
                  id={item.id}
                  onFavoriteClick={() => {
                    // Lógica a ser executada quando o botão "Favoritar" for clicado
                    console.log("Favoritar clicado com o id " + item.id);
                  }}
                  onDelete={() => {
                    deleteItem(item.id)
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

