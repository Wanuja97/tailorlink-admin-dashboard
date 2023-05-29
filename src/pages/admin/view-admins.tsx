import type { ReactElement } from 'react';
import Layout from '../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../_app';

const ViewAdmins: NextPageWithLayout = () => {
  return <p>View Admins</p>
}

ViewAdmins.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default ViewAdmins;