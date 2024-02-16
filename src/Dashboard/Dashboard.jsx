import AppTitle from "./AppTitle";
import NewJobButton from "./NewJobButton";

import styles from "./Dashboard.module.css";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.subHeader}>
          <AppTitle />
          <NewJobButton />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
