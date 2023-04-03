import Navbar from '../components/navbar';

type DashboardLayoutProps = {
    children: React.ReactNode,
}
export default function DashboardLayout({ children }:DashboardLayoutProps) : JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}