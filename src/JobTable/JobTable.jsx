import JobRow from '../JobRow';
import { jobs } from '../jobs';

import styles from './JobTable.module.css';

export default function JobTable() {
  return (
    <table className={styles.jobTable}>
      <thead>
        <tr>
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
                />
              );
            })
          : null}
      </tbody>
    </table>
  );
}