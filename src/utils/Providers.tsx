// src/app/providers.tsx or src/components/Providers.tsx
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top',  horizontal: 'right', }}
      autoHideDuration={2000}>
        <Provider store={store}>
          {children}
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Providers;
