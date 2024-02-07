import Sidebar from '../Sidebar';

import styles from './Dashboard.module.css';

import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <Sidebar />
      <Outlet />
    </main>
  );
}
