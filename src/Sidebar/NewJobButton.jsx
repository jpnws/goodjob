import PropTypes from 'prop-types';

import styles from './NewJobButton.module.css';

export default function NewJobButton({ onNewJobButtonClick }) {
  return (
    <button
      className={styles.newJobButton}
      onClick={onNewJobButtonClick}
    >
      New job
    </button>
  );
}

NewJobButton.propTypes = {
  onNewJobButtonClick: PropTypes.func,
};
