import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Testing the Home page', () => {
  test('should render', () => {
    render(<Home />);
    const home = screen.getByText(/Home/i);
    expect(home).toMatchSnapshot();
  });
});
