import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { jobs } from '../jobs';

export default function JobItem({ onJobUpdate }) {
  const { jobId } = useParams();

  const job = jobs.find((item) => {
    return item.id === jobId;
  });

  return (
    <form onSubmit={onJobUpdate}>
      <input
        type="text"
        name="jobTitle"
        value={job.jobTitle}
      />
      <input
        type="text"
        name="company"
        value={job.company}
      />
      <input
        type="text"
        name="jobPost"
        value={job.jobPost}
      />
      <input
        type="text"
        name="applicationDate"
        value={job.applicationDate}
      />
      <input
        type="text"
        name="applicationStatus"
        value={job.applicationStatus}
      />
      <button type="submit">Save</button>
    </form>
  );
}

JobItem.propTypes = {
  job: PropTypes.object,
  onJobUpdate: PropTypes.func,
};
