import PropTypes from 'prop-types';

import styles from './NewJobModal.module.css';

export default function NewJobModal({ onCloseNewJobModalButtonClick }) {
  return (
    <div className={styles.newJobModal}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>New job</span>
        <button onClick={onCloseNewJobModalButtonClick}>x</button>
      </div>
      <div>modal</div>
    </div>
  );
}

NewJobModal.propTypes = {
  onCloseNewJobModalButtonClick: PropTypes.func,
};
