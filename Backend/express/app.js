const express = require('express');
const path =  require('path');
const fs =  require('fs');
const app = express();
let port = 80;

// Express Specific Stuff

// For serving static file
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// Pug Specific Stuff

// Set the template engine as per pug
// app.set('view engine','pug'); 
app.set('view engine', 'pug');
// Set the view directory
app.set("views",path.join(__dirname,'views'));

// Endpoints
app.get("/",(req,res)=>{
    const con ='hello everyone i will use the best material to make the cake.';
    const params =  {'title':'FF is the best game.',"content" : con};
    res.status(200).render('index',params);
})

app.post('/',(req,res)=>{
    let name =  req.body.name;
    let age =  req.body.age;
    let gender=  req.bodygender ;
    let address =  req.body.address;
    let more =  req.body.more;
    let Outputtowrtite = `The name of the Client is ${name} , and age is ${age}, and gender is ${gender}, and residing at ${address} and more about him/her ${more}.`;

    fs.writeFileSync('output.txt',Outputtowrtite);
    const params =  {'message' : 'Your Form Has been submitted Successfully.'};
    res.status(200).render('index',params);

})
// Start the server.
app.listen(port, ()=>{
    console.log(`THe appliaction started sucessfully on port ${port}`)
})