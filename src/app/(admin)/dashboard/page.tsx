import Header from '@/app/components/Header';
import React from 'react';

export interface pageProps {}

const page: React.FC<pageProps> = () => {
  return <Header>Dashboard</Header>;
};

export default page;
