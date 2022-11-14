import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Testing the Contact page', () => {
  test('should render', () => {
    render(<Contact />);
    const about = screen.getByText(/Contact/i);
    expect(about).toMatchSnapshot();
  });
});
