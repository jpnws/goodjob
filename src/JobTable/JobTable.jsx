import PropTypes from 'prop-types';

import JobRow from '../JobRow/JobRow';

import styles from './JobTable.module.css';

export default function JobTable({ jobs, onDeleteJobItem }) {
  return (
    <table className={styles.jobTable}>
      <thead>
        <tr>
          <th></th>
          <th className={styles.headerTitle}>Job Title</th>
          <th className={styles.headerTitle}>Company</th>
          <th className={styles.headerTitle}>Job Post</th>
          <th className={styles.headerTitle}>Application Date</th>
          <th className={styles.headerTitle}>Status</th>
        </tr>
      </thead>
      <tbody className="">
        {jobs
          ? jobs.map((item) => {
              return (
                <JobRow
                  key={item.id}
                  jobItem={item}
                  onDeleteJobItem={onDeleteJobItem}
                />
              );
            })
          : null}
      </tbody>
    </table>
  );
}

JobTable.propTypes = {
  jobs: PropTypes.array,
  onDeleteJobItem: PropTypes.func,
};
