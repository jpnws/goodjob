import { useEffect, useState } from 'react';
import JobRow from './JobRow';

import { dbClient } from './db';

function JobTable() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    const { data, error } = await dbClient.from('job').select();
    if (error) console.error(error);
    setJobs(data);
  }

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
          {jobs
            ? jobs.map((item) => {
                return (
                  <JobRow
                    key={item.id}
                    jobItem={item}
                  />
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}

export default JobTable;
