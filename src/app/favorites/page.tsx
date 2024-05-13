'use client';

import { useItems } from "@/hooks/useItems";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ListItem } from "@/components/ListItem";

export default function Favorites() {
  const { deleteItem, showAllItemsFavorited } = useItems()
  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Favoritos</h1>
          <div>
          <ul>
             {showAllItemsFavorited.map((item, index) => (
              <ListItem
                key={index}
                title={item.attributes.title}
                createdAt={item.attributes.createdAt}
                favorite={item.attributes.favorite}
                id={item.id}
                onFavoriteClick={() => {
                  console.log("Favoritar clicado com o id " + item.id);
                }}
                onDelete={() => {
                  deleteItem(item.id);
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
