import type { ReactElement } from 'react';
import Layout from '../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../pages/_app';

import Header from '@/components/header';
const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Header/>
      <div className='px-4 py-8 sm:px-6 lg:px-8'>
      <p>Dashboard Content </p>
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