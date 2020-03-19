const chai = require('chai');
const generateShortString = require('../utility/generate_short_string');

const expect = chai.expect;

describe('generate_short_string', () => {
    it('should generate a string', () => {
        expect(generateShortString()).to.be.a('string');
    });
});