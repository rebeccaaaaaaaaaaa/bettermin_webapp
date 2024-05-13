"use client"
import axios from "axios";
import { createContext, ReactNode, use, useContext, useEffect, useState } from "react";
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
    createadBy: string;
  };
};

interface ItemsProps {
  children: ReactNode;
}

interface ItemsContextData {
  showAllItems: Item[];
  setShowAllItems: React.Dispatch<React.SetStateAction<Item[]>>;
  deleteItem: (id: number) => void
  loadAllItems: () => void;
  loadAllItemsFavorited: () => void;
  setShowAllItemsFavorited: React.Dispatch<React.SetStateAction<Item[]>>;
  showAllItemsFavorited: Item[];
}

export const ItemsContext = createContext<ItemsContextData>(
  {} as ItemsContextData
);

export function ItemsProvider({ children }: ItemsProps) {
  const [showAllItems, setShowAllItems] = useState<Item[]>([]);
  const [showAllItemsFavorited, setShowAllItemsFavorited] = useState<Item[]>([]);
  
  const loadAllItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:1337/api/items', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setShowAllItems(response.data.data);
    } catch (error) {
      console.error('Error fetching item list:', error);
    }
  };

  const loadAllItemsFavorited = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:1337/api/items', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setShowAllItemsFavorited(response.data.data = response.data.data.filter((item: Item) => item.attributes.favorite === true));
    } catch (error) {
      console.error('Error fetching item list:', error);
    }
  };

  async function deleteItem(id: number){
    try {
      const response = await axios.delete(`http://localhost:1337/api/items/${id}`);
      setShowAllItems((prevItems) => prevItems.filter((item) => item.id !== id));
      console.log(response.data.data);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  }

  async function insertItem(){}

  return <ItemsContext.Provider value={{ showAllItems, setShowAllItems, deleteItem, loadAllItems, loadAllItemsFavorited, setShowAllItemsFavorited, showAllItemsFavorited }}>{children}</ItemsContext.Provider>;
}
