function JobRow({ jobItem }) {
  return (
    <tr>
      <td>{jobItem.job_title}</td>
      <td>{jobItem.company}</td>
      <td>{jobItem.job_post_link}</td>
      <td>{jobItem.date_applied}</td>
      <td>{jobItem.status}</td>
    </tr>
  );
}

export default JobRow;
