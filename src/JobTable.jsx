import JobDetail from './JobDetail';
import JobRow from './JobRow';
import jobs from './jobs';

function JobTable() {
  return (
    <>
      <table className="table table-striped table-hover table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Company</th>
            <th scope="col">Job Post</th>
            <th scope="col">Application Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {jobs.map((item) => {
            return (
              <JobRow
                key={item.key}
                jobItem={item}
              />
            );
          })}
        </tbody>
      </table>
      <JobDetail />
    </>
  );
}

export default JobTable;
