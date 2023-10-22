"use client";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "@/services/baseUrl";

type Item = {
  id: number;
  attributes: {
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
  showAllItems: Item[]; // Replace 'Item' with the actual type of your items
  setShowAllItems: React.Dispatch<React.SetStateAction<Item[]>>;
}


export const ItemsContext = createContext<ItemsContextData>(
  {} as ItemsContextData
);

export function ItemsProvider({ children }: ItemsProps) {
  const [showAllItems, setShowAllItems] = useState<Item[]>([]); // Initialize with an empty array of Items

  async function loadAllItems() {
    try {
      const response = await axios.get('http://localhost:1337/api/items');
      setShowAllItems(response.data.data); // Assuming response.data.data contains an array of Item objects
      console.log(response.data)
    } catch (error) {
      console.error('Error loading items:', error);
    }
  }

  useEffect(() => {
    loadAllItems(); // Load items when the component mounts
  }, []);

  return <ItemsContext.Provider value={{ showAllItems, setShowAllItems }}>{children}</ItemsContext.Provider>;
}

