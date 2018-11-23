// const http = require('http');
//
// const server = http.createServer(function (rq,rs) {
//    rs.write('hello');
//    console.log('server');
//    console.log('server');
//
//     rs.end();
// });
//
// server.listen(3000, '127.0.0.1', function () {
//    console.log('listen');
//
//    // console.log(global);
//    console.log(__dirname);
// });


const express = require('express');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

const products = [
    {
        "id":1,
        "name": "apple",
        "price": 1
    },
    {
        "id":2,
        "name": "apple2",
        "price": 2
    }
];

app.get('/products', function (req, res) {
    res.send(products);
});

app.get('/products/:id', function (req, res) {
    const myProd =  products.find(function (product) {
       return product.id === +req.params.id;
    });

    res.send(myProd);
});

app.post('/products/', function (req, res) {
    const product = {
        id: Date.now(),
        name:req.body.name,
        price:req.body.price,
    };

    products.push(product);
    res.send(products);
});

app.put('/products/:id', function (req, res) {
    products.find(function (product) {
        if (product.id === +req.params.id) {
            const {name, price} = req.body;

            product.name = name;
            product.price = price;
        }
    });

    res.send(products);
});

app.delete('/products/:id', function (req, res) {
    products.find(function (product) {
        if (product.id === +req.params.id) {
            products.splice(products.indexOf(product), 1);
            return true;
        }
    });

    res.send(products);
});

app.listen(3000, function () {
   console.log('start')
});