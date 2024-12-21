import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="transition-colors text-zinc-400 hover:text-white">
      {children}
    </a>
  );
}
