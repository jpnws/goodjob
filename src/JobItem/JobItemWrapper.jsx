import PropTypes from "prop-types";
import JobItem from "./JobItem";

import { useParams } from "react-router-dom";

export default function JobItemWrapper({ onJobUpdate, jobApplications }) {
  const { jobId } = useParams();
  const jobItem = jobApplications.find((job) => job.id === jobId);

  return (
    <JobItem
      jobItem={jobItem}
      onJobUpdate={onJobUpdate}
    />
  );
}

JobItemWrapper.propTypes = {
  onJobUpdate: PropTypes.func,
  jobApplications: PropTypes.array,
};
