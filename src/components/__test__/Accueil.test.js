import { render, screen } from '@testing-library/react';
import Accueil from '../Accueil';

describe('Testing the Accueil page', () => {
  test('should render', () => {
    render(<Accueil />);
    const accueil = screen.getByText(/Accueil/i);
    expect(accueil).toMatchSnapshot();
  });
});
