import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./JobItem.module.css";

export default function JobItem({ onJobUpdate, jobItem }) {
  const [jobItemState, setJobItemState] = useState(
    jobItem || {
      id: "",
      jobTitle: "",
      company: "",
      jobPost: "",
      applicationDate: "",
      applicationStatus: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobItemState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobUpdate(jobItemState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="hidden"
        value={jobItemState.id}
      />
      <label htmlFor="jobTitle">Job title</label>
      <input
        type="text"
        name="jobTitle"
        id="jobTitle"
        value={jobItemState.jobTitle}
        onChange={handleInputChange}
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        value={jobItemState.company}
        onChange={handleInputChange}
      />
      <label htmlFor="jobPost">Job post</label>
      <input
        type="text"
        name="jobPost"
        id="jobPost"
        value={jobItemState.jobPost}
        onChange={handleInputChange}
      />
      <label htmlFor="applicationDate">Application date</label>
      <input
        type="date"
        name="applicationDate"
        id="applicationDate"
        value={jobItemState.applicationDate}
        onChange={handleInputChange}
      />
      <label htmlFor="applicationStatus">Application status</label>
      <input
        type="text"
        name="applicationStatus"
        id="applicationStatus"
        value={jobItemState.applicationStatus}
        onChange={handleInputChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

JobItem.propTypes = {
  onJobUpdate: PropTypes.func.isRequired,
  jobItem: PropTypes.object,
};
