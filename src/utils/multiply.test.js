import multiply from './multiply';

test('multiply function', () => {
  // Setup
  const input = [3, 4];
  // Act
  const output = multiply(...input);
  // Assert
  expect(output).toBe(12);
});
