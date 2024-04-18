import MagicButton from '@/app/components/MagicButton';
import React from 'react';

export interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
};

export default page;
