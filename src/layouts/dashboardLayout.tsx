import Navbar from '../components/sidenavbar';

type DashboardLayoutProps = {
    children: React.ReactNode,
}
export default function DashboardLayout({ children }:DashboardLayoutProps) : JSX.Element {
  return (
    <>
      <div className='flex flex-row'>
      <Navbar />
      <main className='px-64'>{children}</main>
      </div>
    </>
  )
}