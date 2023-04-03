import type { ReactElement } from 'react';
import Layout from '../../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../../pages/_app';

const Users: NextPageWithLayout = () => {
  return <p>All users view</p>
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Users;