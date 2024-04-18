import AddCompanyButton from './components/AddCompanyButton';
import MagicButton from './components/MagicButton';

import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">HomePage</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
