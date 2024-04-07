import React, { createContext, useContext } from "react";
export type AppContextType = {
  state: {
    count: number;
  };

  dispatch: (action: { count: number }) => void;
};

export const appContext = createContext<AppContextType | undefined>(undefined);
import { useReducer } from "react";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    (state: AppContextType, action: any) => ({
      ...state,
      ...action,
    }),
    {
      count: 0,
    }
  );

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
