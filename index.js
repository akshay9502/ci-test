const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    return res.send('Hi How are you doing?');
});

app.listen(8080, () => {
    console.log('Listining on port 8080');
});