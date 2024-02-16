import ThumbsUpIcon from "../Sidebar/ThumbsUpIcon";

import styles from "./AppTitle.module.css";

export default function AppTitle() {
  return (
    <div className={styles.appTitleBlock}>
      <ThumbsUpIcon />
      <span className={styles.appTitle}>GoodJob</span>
    </div>
  );
}
