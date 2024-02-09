import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jobs } from '../jobs';

import styles from './JobItem.module.css';

export default function JobItem({ onJobUpdate }) {
  const { jobId } = useParams();
  const [jobItem, setJobItem] = useState({
    id: '',
    jobTitle: '',
    company: '',
    jobPost: '',
    applicationDate: '',
    applicationStatus: '',
  });

  useEffect(() => {
    const job = jobs.find((item) => item.id === jobId);
    if (job) {
      setJobItem(job);
    }
  }, [jobId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobUpdate(jobItem);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="hidden"
        value={jobItem.id}
      />
      <label htmlFor="jobTitle">Job title</label>
      <input
        type="text"
        name="jobTitle"
        value={jobItem.jobTitle}
        onChange={handleInputChange}
      />
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        value={jobItem.company}
        onChange={handleInputChange}
      />
      <label htmlFor="jobPost">Job post</label>
      <input
        type="text"
        name="jobPost"
        value={jobItem.jobPost}
        onChange={handleInputChange}
      />
      <label htmlFor="applicationDate">Application date</label>
      <input
        type="text"
        name="applicationDate"
        value={jobItem.applicationDate}
        onChange={handleInputChange}
      />
      <label htmlFor="applicationStatus">Application status</label>
      <input
        type="text"
        name="applicationStatus"
        value={jobItem.applicationStatus}
        onChange={handleInputChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

JobItem.propTypes = {
  onJobUpdate: PropTypes.func.isRequired,
};
