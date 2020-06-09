const express = require('express'); 
const cors = require('cors');
const phones = require('./phones.json');

const app = express(); 
app.use(express.json()); 
app.use(cors());
app.use(express.static('public'));


app.get('/phones', (req, res) => {
    res.json(phones);
});


app.listen(3001, () => { console.log('Server started in port 3001') });