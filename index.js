const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'pug');
app.use(express.static('./public/'))

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})