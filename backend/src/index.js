const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

const catImages = [
    'https://placekitten.com/200/300',
    'https://placekitten.com/300/300',
    'https://placekitten.com/400/300',
];

app.get('/api/cats', (req, res) => {
    res.json(catImages);
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
