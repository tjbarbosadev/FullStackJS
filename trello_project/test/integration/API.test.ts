import axios from "axios";

test('Deve retornar os quadros através da API', async function() {
  const response = await axios({
    url: 'http://localhost:3000/boards/',
    method: 'get'
  });
  const boards = response.data;
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe('Projeto 1');
});

test('Deve retornar as colunas de um quadro por meio da API', async function() {
  const response = await axios({
    url: 'http://localhost:3000/boards/1/columns',
    method: 'get'
  });
  const columns = response.data;
  expect(columns).toHaveLength(3);
  const [columns1, columns2, columns3 ] = columns;
  expect(columns1.name).toBe('Coluna A');
  expect(columns1.hasEstimative).toBe(true);
  expect(columns2.name).toBe('Coluna B');
  expect(columns3.name).toBe('Coluna C');
});

test('Deve retornar os cartões de uma coluna', async function() {
  const response = await axios({
    url: 'http://localhost:3000/boards/1/columns/1/cards',
    method: 'get'
  });
  const cards = response.data;
  expect(cards).toHaveLength(3);
  const [card1, card2, card3 ] = cards;
  expect(card1.title).toBe('Atividade 1');
  expect(card1.estimative).toBe(3);
  expect(card2.title).toBe('Atividade 2');
  expect(card3.title).toBe('Atividade 3');
});