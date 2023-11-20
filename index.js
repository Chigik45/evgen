const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let episodes = [];

app.get('/', (req, res) => {
    let episodeName = `My Little Pony: Episode ${Math.floor(Math.random() * 100) + 1}`;
    episodes.push(episodeName);

    fs.writeFile('episodes.json', JSON.stringify(episodes), (err) => {
        if (err) throw err;
    });

    res.json({ episodeName: episodeName });
});

app.get('/all', (req, res) => {
    fs.readFile('episodes.json', (err, data) => {
        if (err) throw err;
        let allEpisodes = JSON.parse(data);
        res.json(allEpisodes);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
