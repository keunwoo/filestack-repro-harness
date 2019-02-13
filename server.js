const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');

const app = express();
const port = 3000;

if (!process.env['API_KEY']) {
    console.log('Set API_KEY in your environment.');
    process.exit(1);
}
const API_KEY = process.env.API_KEY;

app.engine('html', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.disable('view cache');

app.get('/', (req, res, next) => {
    res.render('index', {API_KEY});
});

app.use(express.static(__dirname));
app.listen(port, () => {
    console.log(`Listening on port ${port} with API key '${API_KEY}'.`);
});
