import Column from "../../src/domain/entity/Column";

test('Deve criar uma coluna', function() {
  const column = new Column('Coluna A', true);
  expect(column.name).toBe('Coluna A');
  expect(column.hasEstimative).toBeTruthy();
});