import { Status } from '@/app/components/StatusLabel';

interface CompanyData {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

const companyData: CompanyData[] = [
  {
    id: 1,
    category: 'Products',
    company: 'Costco',
    status: Status.Pending,
    promotion: true,
    country: 'USA',
    joinedDate: '02.19.2023',
  },
  {
    id: 2,
    category: 'Services',
    company: 'Apple',
    status: Status.Suspended,
    promotion: false,
    country: 'USA',
    joinedDate: '03.15.2022',
  },
  {
    id: 3,
    category: 'Products',
    company: 'Amazon',
    status: Status.NotActive,
    promotion: true,
    country: 'USA',
    joinedDate: '01.10.2023',
  },
  {
    id: 4,
    category: 'Services',
    company: 'Google',
    status: Status.Suspended,
    promotion: false,
    country: 'USA',
    joinedDate: '04.25.2021',
  },
  {
    id: 5,
    category: 'Products',
    company: 'Walmart',
    status: Status.Active,
    promotion: true,
    country: 'USA',
    joinedDate: '05.30.2022',
  },
  {
    id: 6,
    category: 'Services',
    company: 'Microsoft',
    status: Status.Pending,
    promotion: false,
    country: 'USA',
    joinedDate: '06.12.2021',
  },
  {
    id: 7,
    category: 'Products',
    company: 'Tesla',
    status: Status.Suspended,
    promotion: true,
    country: 'USA',
    joinedDate: '07.22.2023',
  },
  {
    id: 8,
    category: 'Services',
    company: 'Netflix',
    status: Status.NotActive,
    promotion: false,
    country: 'USA',
    joinedDate: '08.05.2022',
  },
  {
    id: 9,
    category: 'Products',
    company: 'Disney',
    status: Status.Pending,
    promotion: true,
    country: 'USA',
    joinedDate: '09.15.2021',
  },
  {
    id: 10,
    category: 'Services',
    company: 'Adobe',
    status: Status.Suspended,
    promotion: false,
    country: 'USA',
    joinedDate: '10.10.2020',
  },
  {
    id: 11,
    category: 'Products',
    company: 'Nike',
    status: Status.Pending,
    promotion: true,
    country: 'USA',
    joinedDate: '11.20.2023',
  },
  {
    id: 12,
    category: 'Services',
    company: 'Dropbox',
    status: Status.NotActive,
    promotion: false,
    country: 'USA',
    joinedDate: '12.12.2021',
  },
  {
    id: 13,
    category: 'Products',
    company: 'Starbucks',
    status: Status.Active,
    promotion: true,
    country: 'USA',
    joinedDate: '01.05.2022',
  },
  {
    id: 14,
    category: 'Services',
    company: 'Spotify',
    status: Status.Pending,
    promotion: false,
    country: 'USA',
    joinedDate: '02.28.2021',
  },
  {
    id: 15,
    category: 'Products',
    company: 'Samsung',
    status: Status.Active,
    promotion: true,
    country: 'USA',
    joinedDate: '03.10.2023',
  },
];

export default companyData;
