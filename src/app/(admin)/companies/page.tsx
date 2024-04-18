import React from 'react';

import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';
import companyData from './companyData';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      {companyData.map(
        ({ id, category, company, status, promotion, country, joinedDate }) => (
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
  );
}
