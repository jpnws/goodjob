import JobTableButton from './JobTableButton';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <JobTableButton />
    </aside>
  );
}
