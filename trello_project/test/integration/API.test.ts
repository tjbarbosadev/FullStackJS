import axios from "axios";

test('Deve retornar os quadros através da API', async function() {
  const response = await axios({
    url: 'http://localhost:3000/boards/',
    method: 'get'
  });
  const boards = response.data;
  expect(boards).toHaveLength(1);
});