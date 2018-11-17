const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.send('hello');
});


app.get('/products', function(req, res) {
	// res.send('hello');
	res.render('products', {
		my_product: 'Apple'
	});
});

app.listen(3000, function() {
	console.log('start 3000');
});

