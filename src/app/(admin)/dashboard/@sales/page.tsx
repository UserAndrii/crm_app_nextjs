import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import DashboardCard from '@/app/components/DashboardCard';
import MagicButton from '@/app/components/MagicButton';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  //   const data = await new Promise((res) => {
  //     setTimeout(() => {
  //       res(getSummarySales());
  //     }, 3000);
  //   });

  return (
    <DashboardCard
      label="Sales details"
      //   label={
      //     <>
      //       Sales details <MagicButton />
      //     </>
      //   }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
