const uuid = require('uuid').v4;

function generateShortString() {
    return uuid();
}

module.exports = generateShortString;