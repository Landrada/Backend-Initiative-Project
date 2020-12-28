const express = require('express')
const router = express.Router();
users = [
    {id:1,username:'Happy',email:'happyha@gmail.com',password:'h1234y'},
    {id:2,username:'Livie',email:'livielo@gmail.com',password:'l1234e'},
    {id:3,username:'Lauv',email:'lauvlauv@gmail.com',password:'l1234v'}
];
router.get('/',(req,res)=>{
    res.send(users).status(200);
});
router.post('/insert',(req,res)=>{
    console.log(req.body)
    var newid = users[users.length-1].id+1;
    users.push({
        id: newid,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    res.send({users:users});
});
router.put('/change/:id',(req,res)=>{
    var upIndex = users.map(function(users){
        return users.id;
     }).indexOf(parseInt(req.params.id));
     if(upIndex === -1){
        users.push({
            id: req.params.id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.send({users:users});
    }else{
          users[upIndex]={
            id: req.params.id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          }
          res.send({users:users});
          console.log('Successfully updated user')
      }
});
router.delete('/delete/:id',(req,res)=>{
    var removeIndex = users.map(function(users){
        return users.id;
     }).indexOf(req.params.id); 
     if(removeIndex === -1){
        console.log('User not found');
     } else {
        users.splice(removeIndex, 1);
        console.log('User Deleted');
     }
     res.send({users:users});
});
module.exports = router
