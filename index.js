const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let episodes = [];

app.get('/', (req, res) => {
    let episodeName = `My Little Pony: Episode ${Math.floor(Math.random() * 100) + 1}`;
    episodes.push(episodeName);

    res.json({ episodeName: episodeName });
});

app.get('/all', (req, res) => {
    res.json(episodes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
