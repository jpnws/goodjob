import PropTypes from 'prop-types';

import styles from './JobRow.module.css';

export default function JobRow({ jobItem, onDeleteJobItem }) {
  return (
    <tr>
      <td className={styles.toolColumn}>
        <span className={styles.editLink}>Edit</span>
        <span
          className={styles.deleteLink}
          onClick={() => onDeleteJobItem(jobItem)}
        >
          Delete
        </span>
      </td>
      <td>{jobItem.jobTitle}</td>
      <td>{jobItem.company}</td>
      <td>{jobItem.jobPost}</td>
      <td>{jobItem.applicationDate}</td>
      <td>{jobItem.applicationStatus}</td>
    </tr>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
  onDeleteJobItem: PropTypes.func,
};
