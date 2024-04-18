import Header from '@/app/components/Header';
// import MagicButton from '@/app/components/MagicButton';
import React from 'react';

export interface pageProps {}

const page: React.FC<pageProps> = () => {
  return <Header>Dashboard</Header>;
};

export default page;
