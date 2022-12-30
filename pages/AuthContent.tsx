import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import app from "next/app";
import { useRouter } from "next/router";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../hooks/firebase";
import Header from "./components/Header";

export type UserType = User | null;

export type AuthContextProps = {
  user: UserType;
};

export type AuthProps = {
  children: ReactNode;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProps) => {
  const router = useRouter();
  const auth = useAuth();
  const [user, setUser] = useState<UserType>(null);
  const isAvailableForViewing =
    router.pathname === "/about" ||
    router.pathname === "/login" ||
    router.pathname === "/signup";
  const value = {
    user,
  };

  useEffect(() => {
    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      !user && !isAvailableForViewing && (await router.push("/login"));
    });
    return () => {
      authStateChanged();
    };
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {user && <Header />}
      {children}
    </AuthContext.Provider>
  );
};
