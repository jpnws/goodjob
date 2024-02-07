import PropTypes from 'prop-types';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import styles from './NewJob.module.css';

export default function NewJob({ onNewJobSaveButtonClick }) {
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

  const handleSaveButtonClick = () => {
    // Ensure that all the text fields are not empty.
    if (
      !(jobTitle && company && jobPost && applicationDate && applicationStatus)
    ) {
      return;
    }

    // Consolidate the new job application data into an object.
    const newJobApplication = {
      id: uuidv4(),
      jobTitle: jobTitle,
      company: company,
      jobPost: jobPost,
      applicationDate: applicationDate,
      applicationStatus: applicationStatus,
      createdAt: new Date().toISOString(),
    };

    onNewJobSaveButtonClick(newJobApplication);
  };

  return (
    <div className={styles.newJobModal}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>New job</span>
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
        <button
          className={styles.saveButton}
          onClick={handleSaveButtonClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}

NewJob.propTypes = {
  onCloseNewJobModalButtonClick: PropTypes.func,
  onNewJobSaveButtonClick: PropTypes.func,
};
