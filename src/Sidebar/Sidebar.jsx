import NewJobButton from './NewJobButton';
import NewJobModal from './NewJobModal';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NewJobButton />
      <NewJobModal />
    </aside>
  );
}
