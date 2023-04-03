import type { ReactElement } from 'react';
import Layout from '../../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../../pages/_app';

const ShopRequests: NextPageWithLayout = () => {
  return <p>Pending-requests</p>
}

ShopRequests.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default ShopRequests;