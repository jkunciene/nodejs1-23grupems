const express = require('express');
const app = express();
app.use(express.json());

const products = [
    {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
    {id: 2, title: "Mens Casual Slim Fit" },
    {id: 3, title: "Solid Gold Petite Micropave" },
];

//1-turi buti routes
app.get('/api/products', (req, res)=>{
    res.send(products)
});

//get by id
app.get('/api/products/:id', (req, res)=>{
    const my_product = products.find(item => item.id === parseInt(req.params.id) );
    //console.log(typeof req.params.id)
    if(!my_product) res.status(404).send('Preke nerasta')
    res.send(my_product);
})

//post, put , delete
app.post('/api/products', (req, res)=>{
    const product = {
        id: products.length +1,
        title: req.body.title
    }

    products.push(product);
    res.send(products);
})


app.put('/api/products/:id', (req, res)=>{
    const my_product = products.find(item => item.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("preke nerasta")
    my_product.title = req.body.title;
    res.send(my_product);
})

app.delete('/api/products/:id', (req, res)=>{

})


//2-sistemos kintamuosius (.env faile)
const PORT = 8080;

//3-pacioje pabaigos startuoju web serveri
app.listen(PORT, ()=>{
    console.log(`server is working on ${PORT}`);
})

