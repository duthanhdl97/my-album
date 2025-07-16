import { Route } from 'next';

export type MenuItem = {
  name: string;
  path: Route;
  exact?: boolean;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    path: '/',
    exact: true,
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Services',
    path: '/services',
    submenu: [
      {
        name: 'Web Design',
        path: '/services/web-design',
      },
      {
        name: 'Development',
        path: '/services/development',
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export type ActiveRoutePredicate = (path: Route) => boolean;
