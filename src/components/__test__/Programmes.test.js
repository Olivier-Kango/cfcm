import { render, screen } from '@testing-library/react';
import Programmes from '../Programmes';

describe('Testing the Services page', () => {
  test('should render', () => {
    render(<Programmes />);
    const about = screen.getByText(/Nos Programmes/i);
    expect(about).toMatchSnapshot();
  });
});
