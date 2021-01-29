import { SetupServer } from '@src/server';
import supertest from 'supertest';

// eslint-disable-next-line no-undef
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
