import { Outlet } from 'react-router-dom';

import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
