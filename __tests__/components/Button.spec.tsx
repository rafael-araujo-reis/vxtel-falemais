
import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';

import { buttonMock } from '../../__mocks__/filemock';

describe('Button component test', () => {
  test('should render the button', () => {
    render(<Button titleButton={buttonMock.titleButton} colorButton={'yellow'} />);

    const button = screen.queryByText('Button test');
    expect(button).toBeInTheDocument();
  });
});