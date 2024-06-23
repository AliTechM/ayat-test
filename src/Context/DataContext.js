// src/context/DataContext.js

import React, { createContext, useState } from 'react';
import { rows as initialRows } from '../data';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [rows, setRows] = useState(initialRows);

  const updateRows = (updatedRows) => {
    setRows(updatedRows);
  };

  return (
    <DataContext.Provider value={{ rows, setRows: updateRows }}>
      {children}
    </DataContext.Provider>
  );
};
