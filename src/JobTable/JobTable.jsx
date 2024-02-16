import PropTypes from "prop-types";

import JobRow from "../JobRow/JobRow";

import styles from "./JobTable.module.css";

export default function JobTable({ jobs, onDeleteJobItem }) {
  return (
    <div className={styles.jobTable}>
      <div className={styles.tableHeader}>
        <div className={styles.jobTitleCol}>Job title</div>
        <div className={styles.companyNameCol}>Company name</div>
        <div className={styles.statusCol}>Status</div>
      </div>
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
    </div>
  );
}

JobTable.propTypes = {
  jobs: PropTypes.array,
  onDeleteJobItem: PropTypes.func,
};
