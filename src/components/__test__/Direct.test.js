import { render, screen } from '@testing-library/react';
import Direct from '../Direct';

describe('Testing the Direct page', () => {
  test('should render', () => {
    render(<Direct />);
    const about = screen.getByText(/Direct/i);
    expect(about).toMatchSnapshot();
  });
});
