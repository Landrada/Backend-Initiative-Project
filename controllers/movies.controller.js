const express = require('express')
const router = express.Router();
movies = [
    {id:1,moviename:"Descendants of the sun",country:"South Korea"},
    {id:2,moviename:"Love 020",country:"China"},
    {id:3,moviename:"Kadenang Ginto",country:"Phillipine"}
];
router.get('/',(req,res)=>{
    res.send(movies).status(200);
});
router.post('/insert',(req,res)=>{
    console.log(req.body)
    var newid = movies[movies.length-1].id+1;
    movies.push({
        id: newid,
        moviename: req.body.moviename,
        country: req.body.country
    })
    res.send({movies:movies});
});
router.put('/change/:id',(req,res)=>{
    var upIndex = movies.map(function(movies){
        return movies.id;
     }).indexOf(parseInt(req.params.id));
     if(upIndex === -1){
        movies.push({
            id: req.params.id,
            moviename: req.body.moviename,
            country: req.body.country
        });
        res.send({movies:movies});
    }else{
          movies[upIndex]={
            id: req.params.id,
            moviename: req.body.moviename,
            country: req.body.country
          }
          res.send({movies:movies});
          console.log('Successfully updated user')
      }
});
router.delete('/delete/:id',(req,res)=>{
    var removeIndex = movies.map(function(movies){
        return movies.id;
     }).indexOf(req.params.id); 
     if(removeIndex === -1){
        console.log('User not found');
     } else {
        movies.splice(removeIndex, 1);
        console.log('User Deleted');
     }
     res.send({movies:movies});
});
module.exports = router
