const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Backend do projeto tasks!');
});

app.listen(3000, () => {
    console.log('Backend executando...');
});
