const request = require('supertest');
const app = require('../src/app');

function makeUserName(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

describe('Post Endpoints', () => {
  const username = makeUserName(5);
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/user/signup')
      .send({
        username: username,
        password: '12345678',
        age: 20,
        role: 'user',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('user')
  });
  it('should login a user', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({
        username: username,
        password: '12345678',
        age: 20,
        role: 'user',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('user')
  })
})
