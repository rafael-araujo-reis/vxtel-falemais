
import { render, screen } from '@testing-library/react';
import ButtonLink from '../../src/components/ButtonLink';

import { buttonLinkMock } from '../../__mocks__/filemock';

describe('ButtonLink component test', () => {
  test('should render the buttonLink', () => {
    render(<ButtonLink
      titleButton={buttonLinkMock.titleButton}
      colorButton={'yellow'}
      click={buttonLinkMock.click}
    />);

    const buttonLink = screen.queryByText('Button test');
    expect(buttonLink).toBeInTheDocument();
  });
});