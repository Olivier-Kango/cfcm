import { render, screen } from '@testing-library/react';
import About from '../About';

describe('Testing the About page', () => {
  test('should render', () => {
    render(<About />);
    const about = screen.getByText(/Qui sommes-nous/i);
    expect(about).toMatchSnapshot();
  });
});
