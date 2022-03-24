import { render, screen } from '@testing-library/react';
import SignButton from '../../src/components/SignButton';

describe('SignButton component test', () => {
  test('should render the signButton', () => {
    render(<SignButton title='Acessar conta' />);

    const signButton = screen.getByTestId('pure_signButton');
    expect(signButton).toBeInTheDocument();
  });
});