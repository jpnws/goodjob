import PropTypes from 'prop-types';

export default function JobRow({ jobItem }) {
  return (
    <tr>
      <td>{jobItem.jobTitle}</td>
      <td>{jobItem.company}</td>
      <td>{jobItem.jobPost}</td>
      <td>{jobItem.applicationDate}</td>
      <td>{jobItem.applicationStatus}</td>
    </tr>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
};
