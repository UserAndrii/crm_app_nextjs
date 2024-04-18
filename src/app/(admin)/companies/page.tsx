import React from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/CompanyTable';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
    // <CompanyTable>
    //   {companyData.map(
    //     ({ id, category, company, status, promotion, country, joinedDate }) => (
    //       <CompanyRow
    //         key={id}
    //         id={id}
    //         category={category}
    //         company={company}
    //         status={status}
    //         promotion={promotion}
    //         country={country}
    //         joinedDate={joinedDate}
    //       />
    //     ),
    //   )}
    // </CompanyTable>
  );
}
