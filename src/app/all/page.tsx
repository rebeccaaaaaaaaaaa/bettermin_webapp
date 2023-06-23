"use client";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ListItem } from "@/components/ListItem";

export default function All() {
  return (
    <>
      <Header />
      <div className="flex h-[100vh] w-[100vw]">
        <Sidebar />
        <div className="w-3/4 mx-auto mt-8">
          <h1 className="font-bold text-2xl mb-3">Todos</h1>
          <div>
            <ul>
              <ListItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
