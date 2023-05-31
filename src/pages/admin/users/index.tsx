import type { ReactElement } from 'react';
import Layout from '../../../layouts/dashboardLayout';

import type { NextPageWithLayout } from '../../../pages/_app';
import SearchBar from '@/components/searchBar';
const Users: NextPageWithLayout = () => {
  return (
    <div className='p-12'>
        <SearchBar />
      <div className="bg-white w-max">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  $4.8m
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Users;