import React, { useState, createContext } from "react";
// Creem context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // State-ul sidebarului
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
