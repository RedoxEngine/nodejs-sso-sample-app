const express = require('express');
const os = require('os');
const SSO_SECRET = process.env.SSO_SECRET;
const jose = require('@panva/jose');
const key = jose.JWK.asKey(SSO_SECRET);

const app = express();

let cachedJWT = {};

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ cachedJWT }));
app.post('/sso', (req, res) => {
    console.log(req.headers);
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send('Missing Authorization header');
    }
    const token = req.headers.authorization.split(' ')[1];
    const jwt = jose.JWT.verify(token, key);
    if (jwt) {
        cachedJWT = jwt;
        return res.redirect('http://0.0.0.0:' + process.env.PORT);
    }
    return res.status(401).send('Auth failed');

});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
