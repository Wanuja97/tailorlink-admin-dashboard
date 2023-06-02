import type { ReactElement } from 'react';
import Layout from '../../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../../pages/_app';

const UserProfile: NextPageWithLayout = () => {

  return (
    <>
        <div className='p-12'>
            sdads
        </div>        
    </>
  )
}

UserProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default UserProfile;