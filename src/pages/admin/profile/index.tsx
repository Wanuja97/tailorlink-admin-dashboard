import type { ReactElement } from 'react';
import Layout from '../../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../../pages/_app';

const AdminProfile: NextPageWithLayout = () => {
  return <p>Admin Profile</p>
}

AdminProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default AdminProfile;