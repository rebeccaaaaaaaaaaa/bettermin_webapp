"use client"
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { baseUrl } from "@/services/baseUrl";

type Item = {
  id: number;
  attributes: {
    favorite: boolean;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

interface ItemsProps {
  children: ReactNode;
}

interface ItemsContextData {
  showAllItems: Item[];
  setShowAllItems: React.Dispatch<React.SetStateAction<Item[]>>;
  deleteItem: (id: number) => void
}

export const ItemsContext = createContext<ItemsContextData>(
  {} as ItemsContextData
);

export function ItemsProvider({ children }: ItemsProps) {
  const [showAllItems, setShowAllItems] = useState<Item[]>([]);

  async function loadAllItems() {
    try {
      const response = await axios.get('http://localhost:1337/api/items');
      setShowAllItems(response.data.data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  }

  async function deleteItem(id: number){
    try {
      const response = await axios.delete(`http://localhost:1337/api/items/${id}`);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  }

  useEffect(() => {
    loadAllItems();
  }, []);

  return <ItemsContext.Provider value={{ showAllItems, setShowAllItems, deleteItem }}>{children}</ItemsContext.Provider>;
}
