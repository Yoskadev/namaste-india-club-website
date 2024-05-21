"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface SearchContextProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
}

// Create the context with a default value of null
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// Provider component
const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export { SearchProvider, useSearch };
