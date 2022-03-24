import { render, screen } from '@testing-library/react';
import InputRange from '../../src/components/InputRange';

describe('Input Range component test', () => {
  test('should render the input ranger', () => {

    render(<InputRange minutes={0} handleSelectMinutes={() => (console.log('render component'))} />);

    const inputRange = screen.getByTestId('pure_input_range');
    expect(inputRange).toBeInTheDocument();
  });
});