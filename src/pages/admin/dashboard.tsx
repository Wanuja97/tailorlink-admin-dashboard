import type { ReactElement } from 'react';
import Layout from '../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../pages/_app';

const Page: NextPageWithLayout = () => {
  return <p>Dashboard Content </p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page