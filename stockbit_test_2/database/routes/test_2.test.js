import supertest from 'supertest';
import app from './app';

let server;

describe('/', () => {
  beforeAll(async (done) => {
    server = app.listen(null, () => {
      global.agent = supertest.agent(server);
      done();
    });
  });

  it('SEARCH should return 200', async () => {
    const response = await supertest(app).get('/search');
    expect(response.status).toBe(200);
  });

  it('DETAIL should return 200', async () => {
    const response = await supertest(app).get('/detail');
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await server.close();
  });
});