import { createContext, useContext, useState } from "react";

type ModalContextData = {
  modalVisible: boolean;
  alternarModal: () => void;
};
export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalVisible, setModalVisible] = useState(false);

  const alternarModal = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        alternarModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function UseModal() {
  return useContext(ModalContext);
}
