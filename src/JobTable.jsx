function JobTable() {
  return (
    <table className="table table-striped table-hover table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">Job Title</th>
          <th scope="col">Company</th>
          <th scope="col">Salary</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
          <th scope="col">Resume</th>
          <th scope="col">Cover Letter</th>
        </tr>
      </thead>
      <tbody className="table-group-divider"></tbody>
    </table>
  );
}

export default JobTable;
