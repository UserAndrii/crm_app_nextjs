import React from 'react';
import Header from '@/app/components/Header';
import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/SearchInput';
import AddCompanyButton from '@/app/components/AddCompanyButton';
import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';
import companyData from './companyData';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          {companyData.map(
            ({
              id,
              category,
              company,
              status,
              promotion,
              country,
              joinedDate,
            }) => (
              <CompanyRow
                key={id}
                id={id}
                category={category}
                company={company}
                status={status}
                promotion={promotion}
                country={country}
                joinedDate={joinedDate}
              />
            ),
          )}
        </CompanyTable>
      </main>
    </>
  );
}
