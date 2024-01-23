import jobs from './jobs';

function JobTable() {
  return (
    <table className="table table-striped table-hover table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">Job Title</th>
          <th scope="col">Company</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {jobs.map((item) => {
          return (
            <tr key={item.key}>
              <td>{item.jobTitle}</td>
              <td>{item.company}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default JobTable;
