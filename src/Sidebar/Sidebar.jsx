import PropTypes from 'prop-types';

import NewJobButton from './NewJobButton';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NewJobButton />
    </aside>
  );
}

Sidebar.propTypes = {
  onNewJobSaveButtonClick: PropTypes.func,
};
