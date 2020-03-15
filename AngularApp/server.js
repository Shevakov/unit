const express = require('express');
const app = express();
app.use(express.static('myapp'));

app.get('/', (req, res,next) => res.redirect('/'));

app.listen(8080, 'localhost');