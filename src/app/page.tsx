import AddCompanyButton from './components/AddCompanyButton';
import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">HomePage</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
