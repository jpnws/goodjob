import NewJobButton from './NewJobButton';
import JobTableButton from './JobTableButton';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NewJobButton />
      <JobTableButton />
    </aside>
  );
}
