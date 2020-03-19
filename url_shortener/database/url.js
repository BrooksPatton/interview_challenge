const database = require('./store');
const generateShortString = require('../utility/generate_short_string');

function saveUrl(longUrl) {
    return new Promise((resolve, reject) => {
        const shortUrl = generateShortString();

        database[shortUrl] = longUrl;

        return resolve(shortUrl);
    });
}

module.exports = {
    saveUrl,
};