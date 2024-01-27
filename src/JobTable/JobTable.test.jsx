import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import JobTable from './JobTable';

describe('App', () => {
  it('renders job title header', () => {
    render(<JobTable />);
    const headline = screen.getByText(/Job Title/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders company header', () => {
    render(<JobTable />);
    const headline = screen.getByText(/Company/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders job post header', () => {
    render(<JobTable />);
    const headline = screen.getByText(/Job Post/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders application date header', () => {
    render(<JobTable />);
    const headline = screen.getByText(/Application Date/i);
    expect(headline).toBeInTheDocument();
  });

  it('renders status header', () => {
    render(<JobTable />);
    const headline = screen.getByText(/Status/i);
    expect(headline).toBeInTheDocument();
  });
});
