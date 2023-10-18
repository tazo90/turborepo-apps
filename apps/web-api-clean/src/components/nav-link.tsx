import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
  children: React.ReactNode;
  href: string;
  exact?: boolean;
  [key: string]: any;
}

export function NavLink({ children, href, exact, ...props }: INavLink) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.classname += ' active';
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
