import PropTypes from 'prop-types';

export default function JobRow({ jobItem }) {
  return (
    <tr>
      <td>{jobItem.jobTitle}</td>
      <td>{jobItem.company}</td>
      <td>{jobItem.jobPostLink}</td>
      <td>{jobItem.dateApplied}</td>
      <td>{jobItem.status}</td>
    </tr>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
};
