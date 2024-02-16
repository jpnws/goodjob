import PropTypes from "prop-types";

import JobRow from "../JobRow/JobRow";

import styles from "./JobTable.module.css";

export default function JobTable({ jobs, onDeleteJobItem }) {
  return (
    <table className={styles.jobTable}>
      <thead>
        <tr className={styles.tableHeader}>
          <th className={styles.jobTitleCol}>Job</th>
          <th className={styles.companyNameCol}>Company</th>
          <th className={styles.statusCol}>Status</th>
        </tr>
      </thead>
      <tbody>
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
