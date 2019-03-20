var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');


/* GET users listing. */
router.get('/user', function (req, res, next) {
  res.send('respond with a resource');
});

// router.get("/findUser", (req,res) => {

//     User.find({username:req.query.username}).
//     then(result => res.json(result))
// } )

// SIGN UP SECTION
router.post("/signup", (req, res) => {
  debugger
  console.log("hioii")
  const username = req.body.username;
  console.log(req.body)
  User.findOne({
      username: username
    })
    .then(result => {
      if (result) {
        res.status(409).json('user already exists')
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newUser = {
            username: req.body.username,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
          }
          User.create(newUser, (err) => {
            debugger
            if (err) res.json('error')
            else {
              res.cookie("username", req.body.username);
              req.session.user = result._doc
              res.json('user created');
            }
          })
        })
      }
    })
})

//LOGIN SECTION

router.post("/login", (req, res) => {
  console.log(req.body)
  User.findOne({
      username: req.body.username
    })
    .then((result) => {
      if(!result) {
        res.status(401).json({errorMessage: "invalid credentials"})
        return;
      }
      else {
        bcrypt.compare(req.body.password, result.password, (err,equal)=>{
          if(err) res.status(401).json({errorMessage: 'error'})
          else if(equal) {
            debugger
          res.cookie("username", req.body.username);
          req.session.user = result._doc
          res.status(200).send({
              message: "great success",
              user:result
          })}
        })
      }
    })
    .catch((error) => {
      res.json(error)
    })
})


//LOGOUT 

//logout and clear cookies
router.get('/logout', (req,res, next)=>{
  req.session.destroy ((err) => {
    if(err){
     console.log('error logout')
    } else{
    res.clearCookie();
    debugger
    res.status(200).json({message: 'log out success'})
    }
  });
});


// router.get("/users/profile", (req, res)=> {
//   if(req.session.user) {
//     res.json(req.session.user)
//   } else {
//     res.status(403).json({message: "Unauthorized"})
//   }
// })











module.exports = router;