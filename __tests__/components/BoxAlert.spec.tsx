import { render, screen } from "@testing-library/react";
import BoxAlert from "../../src/components/BoxAlert";

describe('BoxAlert component test', () => {
  test('should render the boxAlert', () => {
    render(<BoxAlert
      type="info"
      message="Mensagem de teste"
      hasCoverage={true}
    />);

    const boxAlert = screen.queryByText('Mensagem de teste');
    expect(boxAlert).toBeInTheDocument();
  });
});