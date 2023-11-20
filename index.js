const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const axios = require('axios');

async function getApiResponse(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


let episodes = [];

app.get('/', (req, res) => {
    let episodeName = `My Little Pony: Episode ${Math.floor(Math.random() * 100) + 1}`;
    episodes.push(episodeName);

    res.json({ episodeName: episodeName });
});

app.get('/all', (req, res) => {
  res.json(episodes);
});
app.get('/get', (req, res) => {
    res.json(getApiResponse("https://ponyapi.net/v1/character/1"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
