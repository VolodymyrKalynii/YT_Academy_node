const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.send('hello');
});

const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let curr = {};

request(url, function(req, res, body) {
	curr = JSON.parse(body);
	console.log(typeof curr);
});

app.get('/currency', function(req, res) {
	res.send(curr);
	res.end();
});

app.get('/products', function(req, res) {
	res.render('products', {
		my_product: 'Apple',
		fruits:[
			{
				id:1,
				name:'apple'
			}, {
				id:2,
				name:'lemon'
			}
		]
	});
});

app.get('/products/add', function(req, res) {
	res.render('add_product');
});

app.listen(3000, function() {
	console.log('start 3000');
});
