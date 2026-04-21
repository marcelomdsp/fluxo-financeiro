import { createContext, useContext, useState, useEffect} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../Services/firebase";

type AuthContextData = {
  user: User | null;
  userDoc: UserDoc | null;
  loading: boolean;
  cadastrar: (
    nome: string,
    sobrenome: string,
    email: string,
    senha: string
  ) => Promise<void>;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

type UserDoc = {
  nome: string;
  sobrenome: string;
  email: string;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userDoc, setUserDoc] = useState<UserDoc | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function cadastrar(
    nome: string,
    sobrenome: string,
    email: string,
    senha: string
  ) {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);

    const uid = cred.user.uid;

    await setDoc(doc(db, "usuarios", uid), {
      nome,
      sobrenome,
      email,
      criadoEm: serverTimestamp(),
      atualizadoEm: serverTimestamp(),
    });
  }

  async function login(email: string, senha: string) {
    await signInWithEmailAndPassword(auth, email, senha);
    const userDoc = await getDoc(doc(db, "usuarios", auth.currentUser!.uid));
    setUserDoc(userDoc.data() as UserDoc);

  }

  async function logout() {
    await signOut(auth);
  }

  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userDoc,
        loading,
        cadastrar,
        login,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UseAuth() {
  return useContext(AuthContext);
}
