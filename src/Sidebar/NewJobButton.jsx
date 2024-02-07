import PropTypes from 'prop-types';

import styles from './NewJobButton.module.css';
import { Link } from 'react-router-dom';

export default function NewJobButton() {
  return (
    <Link to="/new">
      <button className={styles.newJobButton}>New job</button>
    </Link>
  );
}

NewJobButton.propTypes = {
  onNewJobButtonClick: PropTypes.func,
};
