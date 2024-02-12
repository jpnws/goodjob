import PropTypes from 'prop-types';

import styles from './JobRow.module.css';

import { Link } from 'react-router-dom';

export default function JobRow({ jobItem }) {
  return (
    <Link
      to={`jobs/${jobItem.id}`}
      className={styles.rowLinkContainer}
    >
      <div className={styles.rowWrapper}>
        <div className={styles.jobTitleCol}>{jobItem.jobTitle}</div>
        <div className={styles.companyCol}>{jobItem.company}</div>
        <div className={styles.statusCol}>{jobItem.applicationStatus}</div>
      </div>
    </Link>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
  onDeleteJobItem: PropTypes.func,
};
