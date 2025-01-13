const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3030;
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/about', (req, res) => {
    fs.readFile('about.html', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/contact', (req, res) => {
    fs.readFile('contactus.html', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/server', (req, res) => {
    fs.readFile('server.html', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.get('/help', (req, res) => {
    fs.readFile('help.html', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});