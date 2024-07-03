import { createContext, useState } from 'react';

const Contexts = createContext();

// eslint-disable-next-line react/prop-types
export const AutoNavigateProvider = ({ children }) => {
  const [isAutoNavigate, setIsAutoNavigate] = useState(false);
  
  const toggleAutoNavigate = () => {
    setIsAutoNavigate(prevState => !prevState);
  };

  return (
    <Contexts.Provider value={{ isAutoNavigate, toggleAutoNavigate }}>
      {children}
    </Contexts.Provider>
  );
};

export default Contexts;
