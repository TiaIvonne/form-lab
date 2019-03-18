var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require ('../model/User');


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get("/findUser", (req,res) => {
  
//     User.find({username:req.query.username}).
//     then(result => res.json(result))
// } )


router.post("/user", (req, res) => {
  console.log("hi")
  console.log(req.body)
  bcrypt.hash(req.body.password, 10, (err, hash) =>{
        newUser = {
            username:   req.body.username,
            password:   hash,
            firstname:  req.body.firstname,
            lastname:   req.body.lastname,
      }
      User.create(newUser, (err) => {
        debugger
        if(err) res.json('error')
        else res.json('user created');
      })
  })
})

module.exports = router;
