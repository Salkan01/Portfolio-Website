import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Frontend Developer & Aspiring Full-Stack Engineer/i);
  expect(heading).toBeInTheDocument();
});
