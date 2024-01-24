import JobRow from './JobRow';
import jobs from './jobs';

function JobTable() {
  return (
    <>
      <table className="">
        <thead>
          <tr>
            <th scope="">Job Title</th>
            <th scope="">Company</th>
            <th scope="">Job Post</th>
            <th scope="">Application Date</th>
            <th scope="">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {jobs.map((item) => {
            return (
              <JobRow
                key={item.id}
                jobItem={item}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default JobTable;
