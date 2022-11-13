import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CFCM', () => {
  render(<App />);
  const linkElement = screen.getByText(/CFCM/i);
  expect(linkElement).toBeInTheDocument();
});
