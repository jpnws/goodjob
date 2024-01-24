import { useEffect, useState } from 'react';
import JobRow from './JobRow';

import { dbClient } from './db';
import { Database } from './supabase';

function JobTable() {
  const [jobs, setJobs] = useState<Array<
    Database['public']['Tables']['job']['Row']
  > | null>();

  async function fetchJobs() {
    const { data, error } = await dbClient.from('job').select();
    setJobs(data);
    if (error) console.error(error);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

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
