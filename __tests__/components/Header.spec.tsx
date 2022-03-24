import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header';

import { itemsMenu } from '../../__mocks__/filemock';

describe('Header component test', () => {
  test('should render the header', () => {
    render(<Header itemsMenu={itemsMenu} />);

    const header = screen.getByTestId('pure_header');
    expect(header).toBeInTheDocument();
  });
});