import PropTypes from 'prop-types';

export default function JobEditor({ job, onJobUpdate }) {
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

JobEditor.propTypes = {
  job: PropTypes.object,
  onJobUpdate: PropTypes.func,
};
