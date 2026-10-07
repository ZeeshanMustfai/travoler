import { createContext, useContext, useState, type ReactNode } from "react";

type ModalKind = "login" | "demo" | null;

type ModalState = {
  active: ModalKind;
  openLogin: () => void;
  openDemo: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalState | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ModalKind>(null);

  const value: ModalState = {
    active,
    openLogin: () => setActive("login"),
    openDemo: () => setActive("demo"),
    close: () => setActive(null),
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModals must be used within a ModalProvider");
  return ctx;
}
