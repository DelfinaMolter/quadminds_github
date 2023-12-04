import React, { useState, ReactNode,} from 'react';

interface GenericContextInterface {
  [key: string]: any;
}

interface GenericContextProviderProps {
  children: ReactNode;
}

export const GenericContext = React.createContext<GenericContextInterface>({});

export const GenericContextProvider= ({ children }: GenericContextProviderProps) => {
  const [context, setContext] = useState<GenericContextInterface>({});

  // Asignar valor al context
  const assignContext = (key: string, value: any) => {
    setContext(currentContext => ({
      ...currentContext,
      [key]: value,
    }));
  };

  return (
    <GenericContext.Provider value={{...context, assignContext}}>
      {children}
    </GenericContext.Provider>
  );
};
