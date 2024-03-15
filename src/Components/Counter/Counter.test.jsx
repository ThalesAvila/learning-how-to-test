import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  screen.debug();
});

test('it should increment when the "Increment" button is pressed', async () => {
  // Setup
  const user = userEvent.setup();
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  const counter = screen.getByTestId('current-count');
  // Act
  await user.click(incrementButton);
  // Assert
  expect(counter).toHaveTextContent('1');
});
