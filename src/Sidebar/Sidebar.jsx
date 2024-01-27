import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NewJobButton />
    </aside>
  );
}

function NewJobButton() {
  return <button>New job</button>;
}
