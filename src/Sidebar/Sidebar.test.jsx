import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders the sidebar', () => {
    render(<Sidebar />);
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
  });

  it('renders a new job button', () => {
    render(<Sidebar />);
    const newJobButton = screen.getByRole('button', { name: /new job/i });
    expect(newJobButton).toBeInTheDocument();
  });
});
