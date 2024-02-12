import NewJobButton from './NewJobButton';
import JobTableButton from './JobTableButton';
import AppTitle from './AppTitle';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <AppTitle />
      <NewJobButton />
      <JobTableButton />
    </aside>
  );
}
