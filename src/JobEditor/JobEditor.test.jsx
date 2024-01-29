import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import JobEditor from './JobEditor';

describe('Show the job application editor', () => {
  it('renders the component', () => {
    render(<JobEditor />);
  });
});
