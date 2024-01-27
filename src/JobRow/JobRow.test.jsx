import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobRow from './JobRow';

describe('JobRow', () => {
  const mockJobItem = {
    jobTitle: 'Software Engineer',
    company: 'TechCorp',
    jobPostLink: 'https://techcorp/jobs/se',
    dateApplied: '2023-01-15',
    status: 'Applied',
  };

  it('renders job title', () => {
    render(<JobRow jobItem={mockJobItem} />);
    expect(screen.getByText(mockJobItem.jobTitle)).toBeInTheDocument();
  });

  it('renders company name', () => {
    render(<JobRow jobItem={mockJobItem} />);
    expect(screen.getByText(mockJobItem.company)).toBeInTheDocument();
  });

  it('renders job post link', () => {
    render(<JobRow jobItem={mockJobItem} />);
    expect(screen.getByText(mockJobItem.jobPostLink)).toBeInTheDocument();
  });

  it('renders date applied', () => {
    render(<JobRow jobItem={mockJobItem} />);
    expect(screen.getByText(mockJobItem.dateApplied)).toBeInTheDocument();
  });

  it('renders application status', () => {
    render(<JobRow jobItem={mockJobItem} />);
    expect(screen.getByText(mockJobItem.status)).toBeInTheDocument();
  });
});
