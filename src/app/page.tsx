'use client';

import React from 'react';

import { SnackbarProvider } from 'notistack';
import HomePage from '@/Components/layout/HomePage';

const Page = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <HomePage />
    </SnackbarProvider>
  );
};

export default Page;
