  "use client";
  import axios from "axios";
  import {
    createContext,
    FormEvent,
    ReactNode,
    useEffect,
    useState,
  } from "react";

  interface AuthProps {
    children: ReactNode;
  }

  interface AuthContextData {
    user: string;
    password: string;
    setUser: (user: string) => void;
    setPassword: (password: string) => void;
    handleSubmit: (e: FormEvent) => void;
    handleLogout: () => void;
    setShowErrorAlert: (showErrorAlert: boolean) => void;
    showErrorAlert: boolean;
    userName: string;
    isLogged: boolean;
    loading: boolean;
    setLoading: (loading: boolean) => void;
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
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const AuthURL = "http://localhost:1337/api/auth/local";
      const params = {
        identifier: user,
        password: password
      }
      axios
        .post(AuthURL, params)
        .then((response) => {
          console.log(params)
          if (response.status === 200) {
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", response.data.user.username);
            setUserName(response.data.user.username);
            console.log("User logged in successfully!")            
            window.location.replace("/home");       
            setIsLogged(true);
          } else {
            setShowErrorAlert(true)
            console.log("An error occurred:");
          }
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
          loading: isLoading,
          setLoading: setIsLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
