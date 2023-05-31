import Navbar from '../components/sidenavbar';

type DashboardLayoutProps = {
    children: React.ReactNode,
}
export default function DashboardLayout({ children }:DashboardLayoutProps) : JSX.Element {
  return (
    <>
      <div className='w-screen flex flex-row'>
      <Navbar />
      <main className='relative top-0 left-64 w-calc-100vw-minus-16rem'>{children}</main>
      </div>
      {/* ml-64 max-auto max-w-screen-xl */}
    </>
  )
}