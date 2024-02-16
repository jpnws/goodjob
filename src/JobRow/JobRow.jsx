import PropTypes from "prop-types";

import styles from "./JobRow.module.css";

// import { Link } from "react-router-dom";

// <Link
//   to={`jobs/${jobItem.id}`}
//   className={styles.rowLinkContainer}
// ></Link>;

export default function JobRow({ jobItem }) {
  return (
    <tr className={styles.rowWrapper}>
      <td className={styles.jobTitleCol}>{jobItem.jobTitle}</td>
      <td className={styles.companyCol}>{jobItem.company}</td>
      <td className={styles.statusCol}>{jobItem.applicationStatus}</td>
    </tr>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
};
