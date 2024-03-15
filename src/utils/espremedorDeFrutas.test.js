import espremedorDeFrutas from './espremedorDeFrutas';

test('espremedor de frutas deve retornar sumo de laranja quando usamos laranja', () => {
  // Setup
  const input = 'laranja';
  // Act
  const output = espremedorDeFrutas(input);
  // Assert
  expect(output).toBe('Sumo de laranja');
});

test('espremedor de frutas deve retornar sumo de limão quando usamos limão', () => {
  // Setup
  const input = 'limão';
  // Act
  const output = espremedorDeFrutas(input);
  // Assert
  expect(output).toBe('Sumo de limão');
});
