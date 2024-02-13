import AppTitle from './AppTitle';
import NewJobButton from './NewJobButton';

import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <AppTitle />
      <NewJobButton />
    </div>
  );
}
