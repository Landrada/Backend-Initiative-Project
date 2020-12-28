const express = require('express')
const router = express.Router();
rentals = [
    {id:1,moviename:"Descendants of the sun",user:"Happy"},
    {id:2,moviename:"Love 020",user:"Livie"},
    {id:3,moviename:"Kadenang Ginto",user:"Lauv"}
];
router.get('/',(req,res)=>{
    res.send(rentals).status(200);
});
router.post('/insert',(req,res)=>{
    if(checkUser(req.body.user)&&checkMovie(req.body.moviename)){
    console.log(usersNbr);
    console.log(req.body);
    var newid = rentals[rentals.length-1].id+1;
    rentals.push({
        id: newid,
        moviename: req.body.moviename,
        user: req.body.user
    })
    res.send({rentals:rentals});
}else{
    res.send('The user or the movie doesn\'t exist');
}
});
router.put('/change/:id',(req,res)=>{
    var upIndex = rentals.map(function(rentals){
        return rentals.id;
     }).indexOf(parseInt(req.params.id));
     if(upIndex === -1){
        if(checkUser(req.body.user)&&checkMovie(req.body.moviename)){
        rentals.push({
            id: req.params.id,
            moviename: req.body.moviename,
            user: req.body.user
        });
        res.send({rentals:rentals});
    }
    }else{
        if(checkUser(req.body.user)&&checkMovie(req.body.moviename)){
          rentals[upIndex]={
            id: req.params.id,
            moviename: req.body.moviename,
            user: req.body.user
          }
          res.send({rentals:rentals});
          console.log('Successfully updated user')
      }
    }
});
router.delete('/delete/:id',(req,res)=>{
    var removeIndex = rentals.map(function(rentals){
        return rentals.id;
     }).indexOf(req.params.id); 
     if(removeIndex === -1){
        console.log('User not found');
     } else {
        rentals.splice(removeIndex, 1);
        console.log('User Deleted');
     }
     res.send({rentals:rentals});
});
function checkUser(username){
    for( i in users){
        uname = users[i].username;
        if(username==uname){
            return true;
        }
    }
}
function checkMovie(movie){
    for( i in movies){
        mname = movies[i].moviename;
        if(movie==mname){
            return true;
        }
    }
}
module.exports = router
