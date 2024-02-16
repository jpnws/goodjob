import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewJob from "./NewJob/NewJob";
import JobTable from "./JobTable/JobTable";
import Dashboard from "./Dashboard/Dashboard";
import JobItemWrapper from "./JobItem/JobItemWrapper";
import NotFoundPage from "./NotFoundPage";

import { jobs } from "./jobs";

export default function App() {
  const [jobApplications, setJobApplications] = useState(jobs);

  const handleNewJobSaveButtonClick = (newJobApplication) => {
    const updatedJobApplications = [...jobApplications, newJobApplication];
    setJobApplications(updatedJobApplications);
  };

  const handleDeleteItemClick = (jobItem) => {
    const updatedJobApplications = jobApplications.filter((item) => {
      return item.id !== jobItem.id;
    });
    setJobApplications(updatedJobApplications);
  };

  const handleJobUpdateButtonClick = (updatedJobItem) => {
    const updatedJobApplications = jobApplications.map((job) =>
      job.id === updatedJobItem.id ? updatedJobItem : job
    );
    setJobApplications(updatedJobApplications);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        >
          <Route
            index
            element={
              <JobTable
                jobs={jobApplications}
                onDeleteJobItem={handleDeleteItemClick}
              />
            }
          />
          <Route
            path="new"
            element={
              <NewJob onNewJobSaveButtonClick={handleNewJobSaveButtonClick} />
            }
          />
          <Route
            path="jobs/:jobId"
            element={
              <JobItemWrapper
                onJobUpdate={handleJobUpdateButtonClick}
                jobApplications={jobApplications}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
