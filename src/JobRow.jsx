import PropTypes from 'prop-types';

function JobRow({ jobItem }) {
  return (
    <tr>
      <td>{jobItem.jobTitle}</td>
      <td>{jobItem.company}</td>
      <td>{jobItem.date}</td>
      <td>{jobItem.status}</td>
    </tr>
  );
}

JobRow.propTypes = {
  jobItem: PropTypes.object,
};

export default JobRow;
