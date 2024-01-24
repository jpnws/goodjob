import { Job } from './types';

interface JobRowProps {
  jobItem: Job;
}

const JobRow: React.FC<JobRowProps> = ({ jobItem }) => (
  <tr>
    <td>{jobItem.jobTitle}</td>
    <td>{jobItem.company}</td>
    <td>{jobItem.jobPostLink}</td>
    <td>{jobItem.date}</td>
    <td>{jobItem.status}</td>
  </tr>
);

export default JobRow;
