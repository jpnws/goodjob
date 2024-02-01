import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import JobEditor from './JobEditor';

describe('Show the job application editor', () => {
  it('populates job application data in form', () => {
    const job = {
      id: '22969be6-4524-4a8e-8f05-a52ae17a6ebf',
      jobTitle: 'Software Engineer',
      company: 'TechCorp',
      jobPost: 'https://example.com/job/12345',
      applicationDate: '2023-01-16',
      applicationStatus: 'Applied',
      createdAt: '2023-01-15T12:34:56',
    };
    render(<JobEditor job={job} />);
    expect(screen.getByDisplayValue(job.jobTitle)).toBeInTheDocument();
    expect(screen.getByDisplayValue(job.company)).toBeInTheDocument();
    expect(screen.getByDisplayValue(job.jobPost)).toBeInTheDocument();
    expect(screen.getByDisplayValue(job.applicationDate)).toBeInTheDocument();
    expect(screen.getByDisplayValue(job.applicationStatus)).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    const mockSubmitHandler = vi.fn();
    const job = {
      id: '22969be6-4524-4a8e-8f05-a52ae17a6ebf',
      jobTitle: 'Software Engineer',
      company: 'TechCorp',
      jobPost: 'https://example.com/job/12345',
      applicationDate: '2023-01-16',
      applicationStatus: 'Applied',
      createdAt: '2023-01-15T12:34:56',
    };
    render(
      <JobEditor
        job={job}
        onJobUpdate={mockSubmitHandler}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /save/i }));
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});
