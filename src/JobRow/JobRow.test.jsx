import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import JobRow from './JobRow';

describe('JobRow', () => {
  const mockJobItem = {
    id: '81246938-60df-41b3-bfc9-2976a2f9ca92',
    jobTitle: 'Software Engineer',
    company: 'TechCorp',
    jobPost: 'https://techcorp/jobs/se',
    applicationDate: '2023-01-15',
    applicationStatus: 'Applied',
  };

  it('renders job title', () => {
    render(
      <MemoryRouter>
        <JobRow jobItem={mockJobItem} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockJobItem.jobTitle)).toBeInTheDocument();
  });

  it('renders company name', () => {
    render(
      <MemoryRouter>
        <JobRow jobItem={mockJobItem} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockJobItem.company)).toBeInTheDocument();
  });

  it('renders job post link', () => {
    render(
      <MemoryRouter>
        <JobRow jobItem={mockJobItem} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockJobItem.jobPost)).toBeInTheDocument();
  });

  it('renders date applied', () => {
    render(
      <MemoryRouter>
        <JobRow jobItem={mockJobItem} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockJobItem.applicationDate)).toBeInTheDocument();
  });

  it('renders application status', () => {
    render(
      <MemoryRouter>
        <JobRow jobItem={mockJobItem} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockJobItem.applicationStatus)).toBeInTheDocument();
  });
});
