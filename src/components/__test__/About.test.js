import { render, screen } from '@testing-library/react';
import About from '../About';

describe('Testing the Home page', () => {
  test('should render', () => {
    render(<About />);
    const about = screen.getByText(/About/i);
    expect(about).toMatchSnapshot();
  });
});
