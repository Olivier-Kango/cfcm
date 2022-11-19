import { render, screen } from '@testing-library/react';
import Medias from '../Medias';

describe('Testing the Medias page', () => {
  test('should render', () => {
    render(<Medias />);
    const about = screen.getByText(/Médias/i);
    expect(about).toMatchSnapshot();
  });
});
