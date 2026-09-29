import { Routes } from '@angular/router';

/**
 * Each page is lazy-loaded, so visitors only download the code
 * for the page they are viewing.
 */
export const routes: Routes = [
  {
    path: '',
    title: 'Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About Us | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'programs',
    title: 'Programs | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/programs/programs').then((m) => m.Programs),
  },
  {
    path: 'impact',
    title: 'Impact | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/impact/impact').then((m) => m.Impact),
  },
  {
    path: 'get-involved',
    title: 'Get Involved | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/get-involved/get-involved').then((m) => m.GetInvolved),
  },
  {
    path: 'contact',
    title: 'Contact Us | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'Page Not Found | Pamoja Empowerment Initiative',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
