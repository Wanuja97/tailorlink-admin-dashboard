import type { ReactElement } from 'react';
import Layout from '../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../_app';

const AddNewAdmin: NextPageWithLayout = () => {
  return <p>Add new Admins</p>
}

AddNewAdmin.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default AddNewAdmin;