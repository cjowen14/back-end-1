const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];


app.get('/api/users', (req, res) => {
    res.status(200).send(friends);
})

app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today </h3>`;
    res.status(200).send(phrase);
})

app.get('/api/random', (req, res) => {
    let randoPicker = Math.floor(Math.random() * friends.length);

    res.status(200).send(friends[randoPicker]);
})


app.listen(4000, () => console.log('Server running on port 4000'));