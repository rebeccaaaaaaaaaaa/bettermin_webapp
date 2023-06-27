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

interface AuthProps {
  children: ReactNode;
}

interface AuthContextData {
  user: string;
  password: string;
  setUser: (user: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLogout: () => void;
  setShowErrorAlert: (showErrorAlert: boolean) => void;
  showErrorAlert: boolean;
  userName: string;
  isLogged: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = () => {
    const AuthURL = "http://localhost:1337/api/auth/local";
    axios
      .post(AuthURL, {
        identifier: user,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", response.data.user.username);
        setUserName(response.data.user.username);
        setIsLogged(true);
        window.location.reload();
        window.history.pushState({}, "", "/home");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.history.pushState({}, "", "/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
      setUserName(localStorage.getItem("user"));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        setPassword,
        handleSubmit,
        handleLogout,
        showErrorAlert,
        setShowErrorAlert,
        user,
        password,
        userName: userName || "",
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
