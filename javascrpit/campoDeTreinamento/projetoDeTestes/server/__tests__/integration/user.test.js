import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';
import factory from '../factories';
import truncate from '../util/trucate';

describe('User', () => {
  beforeAll(async () => {
    await truncate();
  });

  it('user password when new user', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });
    const compareHash = await bcrypt.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
  });

  it('able to register', async () => {
    // const user = await factory.attrs('User');
    const response = await request(app)
      .post('/users')
      .send({
        // user
        name: 'Paulo Ricardo',
        email: 'paulor8bit@gmail.com',
        password: '123456',
      });
    expect(response.body).toHaveProperty('id');
  });

  // it('with duplicated email', async () => {
  //   await request(app)
  //     .post('/users')
  //     .send({
  //       name: 'Paulo Ricardo',
  //       email: 'paulor8bit@gmail.com',
  //       password_hash: '123456',
  //     });

  //   const response = await request(app)
  //     .post('/users')
  //     .send({
  //       name: 'Paulo Ricardo',
  //       email: 'paulor8bit@gmail.com',
  //       password_hash: '123456',
  //     });

  //   expect(response.body).toBe(400);
  // });
});
