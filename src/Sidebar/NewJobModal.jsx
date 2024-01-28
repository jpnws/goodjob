import PropTypes from 'prop-types';

import styles from './NewJobModal.module.css';
import { useState } from 'react';

export default function NewJobModal({ onCloseNewJobModalButtonClick }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobPost, setJobPost] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [applicationStatus, setApplicationStatus] = useState('');

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleJobPost = (e) => {
    setJobPost(e.target.value);
  };

  const handleApplicationDate = (e) => {
    setApplicationDate(e.target.value);
  };

  const handleApplicationStatus = (e) => {
    setApplicationStatus(e.target.value);
  };

  return (
    <div className={styles.newJobModal}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>New job</span>
        <button onClick={onCloseNewJobModalButtonClick}>x</button>
      </div>
      <form className={styles.newJobForm}>
        <label htmlFor="jobTitle">Job title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          placeholder="Job title"
          className={styles.textBox}
          onChange={handleJobTitle}
          value={jobTitle}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          className={styles.textBox}
          onChange={handleCompany}
          value={company}
        />
        <label htmlFor="jobPost">Job post</label>
        <input
          type="text"
          id="jobPost"
          name="jobPost"
          placeholder="Job post"
          className={styles.textBox}
          onChange={handleJobPost}
          value={jobPost}
        />
        <label htmlFor="applicationDate">Application date</label>
        <input
          type="text"
          id="applicationDate"
          name="applicationDate"
          placeholder="Applicate date"
          className={styles.textBox}
          onChange={handleApplicationDate}
          value={applicationDate}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          name="status"
          placeholder="Status"
          className={styles.textBox}
          onChange={handleApplicationStatus}
          value={applicationStatus}
        />
      </form>
      <div className={styles.buttonContainer}>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
}

NewJobModal.propTypes = {
  onCloseNewJobModalButtonClick: PropTypes.func,
};
