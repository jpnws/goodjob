import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Dashboard from '../src/Dashboard';

describe('Create a new job', () => {
  it('submits a new job form and displays data in table', async () => {
    const user = userEvent.setup();

    const job = {
      jobTitle: 'Cool Engineer',
      company: 'Cool Company Inc.',
      jobPost: 'https://www.cool-company123.com/jobs/123',
      applicationDate: '2024-01-28',
      applicationStatus: 'Applied',
    };

    render(<Dashboard />);

    // Count the number of application status text in the table.
    // This is because there could be multiple same status text in the table.
    await waitFor(() => screen.getAllByText(job.applicationStatus));
    const prevApplicationStatues = waitFor(() =>
      screen.getAllByText(job.applicationStatus)
    );
    const prevApplicationStatusLength = prevApplicationStatues.length;

    await user.click(screen.getByRole('button', { name: /new job/i }));

    await waitFor(() => screen.getByRole('button', { name: /save/i }));

    const jobTitleField = screen.getByLabelText(/Job title/i);
    const jobCompanyField = screen.getByLabelText(/Company/i);
    const jobPostField = screen.getByLabelText(/Job post/i);
    const jobApplicationDateField = screen.getByLabelText(/Application date/);
    const jobApplicationStatusField = screen.getByLabelText(/Status/i);

    expect(jobTitleField).toBeVisible();
    expect(jobCompanyField).toBeVisible();
    expect(jobPostField).toBeVisible();
    expect(jobApplicationDateField).toBeVisible();
    expect(jobApplicationStatusField).toBeVisible();

    await user.type(jobTitleField, job.jobTitle);
    await user.type(jobCompanyField, job.company);
    await user.type(jobPostField, job.jobPost);
    await user.type(jobApplicationDateField, job.applicationDate);
    await user.type(jobApplicationStatusField, job.applicationStatus);

    expect(jobTitleField.value).toBe(job.jobTitle);
    expect(jobCompanyField.value).toBe(job.company);
    expect(jobPostField.value).toBe(job.jobPost);
    expect(jobApplicationDateField.value).toBe(job.applicationDate);
    expect(jobApplicationStatusField.value).toBe(job.applicationStatus);

    const newJobApplicationSubmitButton = screen.getByRole('button', {
      name: /save/i,
    });
    expect(newJobApplicationSubmitButton).toBeVisible();
    await user.click(newJobApplicationSubmitButton);

    const closeNewJobModal = screen.getByRole('button', { name: /x/i });
    expect(closeNewJobModal).toBeVisible();
    await user.click(closeNewJobModal);
    expect(closeNewJobModal).not.toBeInTheDocument();

    await waitFor(() => screen.getByText(job.jobTitle));
    await waitFor(() => screen.getByText(job.company));
    await waitFor(() => screen.getByText(job.jobPost));
    await waitFor(() => screen.getByText(job.applicationDate));

    // Count the number of application status text in the table.
    await waitFor(() => screen.getAllByText(job.applicationStatus));
    const currApplicationStatues = waitFor(() =>
      screen.getAllByText(job.applicationStatus)
    );
    const currApplicationStatusLength = currApplicationStatues.length;

    // Compare the previous and current application status text.
    expect(prevApplicationStatusLength + currApplicationStatusLength).toBe(
      prevApplicationStatusLength + 1
    );
  });
});
