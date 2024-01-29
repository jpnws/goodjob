import { useState } from 'react';

import JobTable from '../JobTable';
import Sidebar from '../Sidebar';

import styles from './Dashboard.module.css';

import { jobs } from '../jobs';

export default function Dashboard() {
  const [jobApplications, setJobApplications] = useState(jobs);

  const handleNewJobSaveButtonClick = (newJobApplication) => {
    const updatedJobApplications = [...jobApplications, newJobApplication];
    setJobApplications(updatedJobApplications);
  };

  return (
    <main className={styles.dashboard}>
      <Sidebar onNewJobSaveButtonClick={handleNewJobSaveButtonClick} />
      <JobTable jobs={jobApplications} />
    </main>
  );
}
