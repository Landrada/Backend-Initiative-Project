const express = require('express');
const app = express();
const user = require('./controllers/users.contrloller');
const movie = require('./controllers/movies.controller');
const rental = require('./controllers/rentals.controller');
// parse application/json
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Welcome').status(200);
});
app.use('/users',user);
app.use('/movies',movie);
app.use('/rentals',rental);

const port= process.env.PORT || 7000;
app.listen(port,()=>console.log(`Listening on port`,port));


