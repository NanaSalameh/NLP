const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/api/analyze', async (req, res) => {
    const { url } = req.body;
    // Mock API response
    res.json({
        polarity: 'positive',
        subjectivity: 'subjective',
        text: 'This is a sample text snippet from the article.'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
