import { render, screen } from '@testing-library/react';
import Formation from '../Formation';

describe('Testing the Accueil page', () => {
  test('should render', () => {
    render(<Formation />);
    const accueil = screen.getByText(/Formation/i);
    expect(accueil).toMatchSnapshot();
  });
});
