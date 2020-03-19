const supertest = require('supertest');
const chai = require('chai');
const app = require('../app');

const api = supertest(app);
const expect = chai.expect;

describe('url shortener', () => {
    it('should take in a url and give back a shortened url', done => {
        const url = 'https://www.google.com';

        api.post('/api/v1/shorten_url')
            .send({ url })
            .expect(201)
            .end((error, result) => {
                if (error) return done(error);

                expect(result.body.url).to.not.be.equal(url);
                done();
            });
    });
});