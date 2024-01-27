import JobTable from '../JobTable';
import Sidebar from '../Sidebar';

import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <Sidebar />
      <JobTable />
    </main>
  );
}
