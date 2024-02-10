import { Link } from 'react-router-dom';

import styles from './JobTableButton.module.css';
import BriefCaseIcon from './BriefCaseIcon';

export default function JobTableButton() {
  return (
    <Link
      to="/"
      role="button"
      className={styles.jobTableButton}
    >
      <BriefCaseIcon />
      <span className={styles.sidebarLinkText}>Job applications</span>
    </Link>
  );
}
