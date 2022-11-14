import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Testing the Services page', () => {
  test('should render', () => {
    render(<Services />);
    const about = screen.getByText(/Nos Services/i);
    expect(about).toMatchSnapshot();
  });
});
