import { createContext, useContext, useState } from "react";
import { TemaClaro } from "../Temas/Claro";
import { TemaEscuro } from "../Temas/Escuro";

type Tema = typeof TemaClaro;
type ThemeContextData = {
  tema: Tema;
  modo: "claro" | "escuro";
  alternarTema: () => void;
};

const TemaContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [modo, setModo] = useState<"claro" | "escuro">("escuro");

  const alternarTema = () => {
    setModo((prev) => (prev === "claro" ? "escuro" : "claro"));
  };

  const tema = modo === "claro" ? TemaClaro : TemaEscuro;

  return (
    <TemaContext.Provider value={{ tema, modo, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
