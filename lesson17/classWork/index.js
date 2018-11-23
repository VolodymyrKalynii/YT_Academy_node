const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const fs = require('fs');
// const io = require('socket.io')(http);
const port = 3000;
const DBfile = './data/data_in_file';
// const DB = require('./data/data_in_array');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/products', (req, res) => {
    // res.send(DB.find());
    fs.readFile(DBfile, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.send(data);
        res.end();
    })
});

// app.get('/products/:id', (req, res) => {
//     // res.send(DB.findProd(+req.params.id - 1));
// });

app.post('/products/', (req, res) => {
    const product = {
        // id: DB.size,
        name:req.body.name,
        price:req.body.price,
    };

    fs.appendFile(DBfile, JSON.stringify(product), err => {
        try {
            if (err) throw err;
            console.log('saved')
        } catch (e) {
            console.log(e);
        }
    });

    res.end();

    // res.send(DB.add(product));
});

http.listen(port, () => {
    console.log('start listen ' + port)
});