import TopBar from '../TopBar/TopBar';

import styles from './Dashboard.module.css';

import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.contentWrapper}>
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
}
