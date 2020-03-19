const express = require('express');
const url = require('../database/url');

const route = express.Router();

route.post('/', (request, response) => {
    const shortUrl = url.saveUrl(request.body.url);
    response.status(201).json({ url: shortUrl });
});

module.exports = route;