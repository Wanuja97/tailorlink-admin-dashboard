import type { ReactElement } from 'react';
import Layout from '../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../pages/_app';

import Header from '@/components/header';
import LineChart from '@/components/line-chart';
import BarChart from '@/components/bar-chart';
import DougnutChart from '@/components/dougnut-chart';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <div className='px-4 py-8 sm:px-6 lg:px-8 bg-gray-100 min-h-screen'>
        <h2>Analytics ✨</h2> <br />
        <h3>User registrations over time</h3>
        <br />
        <div className='flex w-full flex-wrap'>
          <div className='w-1/2'>
            <LineChart />
          </div>
          <div className='w-3/12'>
            <p>Top products</p>
            <DougnutChart />
          </div>
        </div>
        <div className='w-1/2'>
        <BarChart />
        </div>
        


        <p>Calender</p>
        <p>Seller registrations over time</p>
        <p>Total sales over time</p>

      </div>

    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Dashboard