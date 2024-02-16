import { Link } from "react-router-dom";

import CreateNewJobIcon from "./CreateNewJobIcon";

import styles from "./NewJobButton.module.css";

export default function NewJobButton() {
  return (
    <Link
      to="/new"
      role="button"
      className={styles.newJobButton}
    >
      <CreateNewJobIcon />
      <span className={styles.sidebarLinkText}>New job</span>
    </Link>
  );
}
