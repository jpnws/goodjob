import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from '../src/App';

describe('Create a new job', () => {
  it('submits a new job form and displays data in table', async () => {
    const user = userEvent.setup();

    const job = {
      id: 'dk38fkl3-4524-4a8e-8f05-a52ae17a6ebf',
      jobTitle: 'Cool Engineer',
      company: 'Cool Company Inc.',
      jobPost: 'https://www.cool-company123.com/jobs/123',
      applicationDate: '2024-01-28',
      applicationStatus: 'Applied',
      createdAt: '2023-01-15T12:34:56',
    };

    render(<App />);

    // Count the number of application status text in the table.
    // This is because there could be multiple same status text in the table.
    await waitFor(() => screen.getAllByText(job.applicationStatus));
    const prevApplicationStatues = waitFor(() =>
      screen.getAllByText(job.applicationStatus)
    );
    const prevApplicationStatusLength = prevApplicationStatues.length;

    await user.click(screen.getByRole('button', { name: /New job/i }));

    const jobTitleField = screen.getByLabelText(/Job title/i);
    const jobCompanyField = screen.getByLabelText(/Company/i);
    const jobPostField = screen.getByLabelText(/Job post/i);
    const jobApplicationDateField = screen.getByLabelText(/Application date/);
    const jobApplicationStatusField = screen.getByLabelText(/Status/i);

    await waitFor(() => expect(jobTitleField).toBeVisible());
    await waitFor(() => expect(jobCompanyField).toBeVisible());
    await waitFor(() => expect(jobPostField).toBeVisible());
    await waitFor(() => expect(jobApplicationDateField).toBeVisible());
    await waitFor(() => expect(jobApplicationStatusField).toBeVisible());

    await user.type(jobTitleField, job.jobTitle);
    await user.type(jobCompanyField, job.company);
    await user.type(jobPostField, job.jobPost);
    await user.type(jobApplicationDateField, job.applicationDate);
    await user.type(jobApplicationStatusField, job.applicationStatus);

    await waitFor(() => expect(jobTitleField.value).toBe(job.jobTitle));
    await waitFor(() => expect(jobCompanyField.value).toBe(job.company));
    await waitFor(() => expect(jobPostField.value).toBe(job.jobPost));
    await waitFor(() =>
      expect(jobApplicationDateField.value).toBe(job.applicationDate)
    );
    await waitFor(() =>
      expect(jobApplicationStatusField.value).toBe(job.applicationStatus)
    );

    const newJobApplicationSubmitButton = screen.getByRole('button', {
      name: /save/i,
    });
    expect(newJobApplicationSubmitButton).toBeVisible();
    await user.click(newJobApplicationSubmitButton);

    const jobTableButton = screen.getByRole('button', { name: /Jobs/i });
    await waitFor(() => jobTableButton);
    await user.click(jobTableButton);

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

    // Delete the new job application entry.
    const jobRow = screen.getByText(job.jobTitle).closest('tr');
    const deleteButton = within(jobRow).getByText('Delete');
    await user.click(deleteButton);
    expect(jobRow).not.toBeInTheDocument();
  });
});
