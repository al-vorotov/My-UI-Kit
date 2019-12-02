import React, { useState } from 'react';
import LayoutContext from './context'

const LayoutProvider = ({children}) => {
  const object = {
name:'Overview'
  };

  const [state, setState] = useState(object);

  return (
      <LayoutContext.Provider value={state}>
        {children}
      </LayoutContext.Provider>
  );
};

export default LayoutProvider;