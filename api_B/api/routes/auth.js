const router = require("express").Router();
const { json } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const crypto = require('crypto')
var nodemailer = require('nodemailer');
const passport = require("passport");
//sign up

const CLIENT_URL = "http://localhost:3000/";
router.get("/register", async (req, res) => {
  res.end("Home");
});
router.post("/register", async (req, res) => {
  // console.log(req.body)
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password , salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedpassword,
      phone: req.body.phone,
      email: req.body.email,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//LOGIN

router.post("/login", async (req,res)=>
{
  try{
      const user = await User.findOne({username: req.body.username});//the first one matched
      !user && res.status(400).json("wrong username");

      const validates = await bcrypt.compare(req.body.password , user.password);
      !validates && res.status(400).json("password did'nt match");
      const{password , ...others} =user._doc

      res.status(200).json(others);
  } catch(err)
  {
    res.status(500).json(err);
  }
  
});

router.post('/reset', function (req, res) {

  User.findOne({ email: req.body.email }, function (error, User) {
      if(User==null)
      {
          return res.status(404).json({
              success: false,
              msg: "Email is not register",
          });
      }
      var transporter = nodemailer.createTransport({
          // service: 'gmail',//smtp.gmail.com  //in place of service use host...

        host:"smtp.mailtrap.io",
        port: 2525,

          
          auth: {
              user: "4b9808f3baa274",
              pass: "58d2f3d053a168"
          },
      
          tls: {
            rejectUnauthorized: false,
          },
        });
        

    
      var currentDateTime = new Date();
      var mailOptions = {
          from: '"Apply for All Team" <apply@example.com>',
          to: req.body.email,
          subject: 'Password Reset',
          // text: 'That was easy!',
          html: "<h1>Welcome To Apply For All ! </h1><p>\
          <h3>Hello "+User.username+"</h3>\
          If You are requested to reset your password then click on below link<br/>\
          <a href='http://localhost:3000/change-password/"+currentDateTime+"+++"+User.email+"'>Click On This Link</a>\
          </p>"
      };

      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
              User.updateOne({email: User.email}, {
                  token: currentDateTime, 
                  
              },  {multi:true},function(err, affected, resp) {
                  return res.status(200).json({
                      success: false,
                      msg: info.response,
                      userlist: resp
                  });
              })
          }
      });
  })
});


router.post('/updatePassword',function(req, res){
  User.findOne({ email: req.body.email }, function (errorFind, User) {
      if(req.body.password==req.body.confirm_password)
      {
          bcrypt.genSalt(10, (errB, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                  if (err) throw err;
                  let newPassword = hash;
                  let condition = { _id: User._id };
                  let dataForUpdate = { password: newPassword };
                  User.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (error, updatedUser) {
                      if (error) {
                          if (err.name === 'MongoError' && error.code === 11000) {
                            return res.status(500).json({msg:'Mongo Db Error', error:error.message});
                          }else{
                              return res.status(500).json({msg:'Unknown Server Error', error:'Unknow server error when updating User'});
                          }
                      }
                      else{
                              if (!updatedUser) {
                                  return res.status(404).json({
                                      msg: "User Not Found.",
                                      success: false
                                  });
                              }else{
                              return res.status(200).json({
                                  success: true,
                                  msg: "Your password are Successfully Updated",
                                  updatedData: updatedUser
                              });
                          }
                      }
                  });
              });
          });
      }
      if (errorFind)
      {
              return res.status(401).json({
              msg: "Something Went Wrong",
              success: false
          });
      }
  }
  );
  router.get("/login/success", (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    }
  });
  
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });
  
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });















  router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
  router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
  );
})

module.exports = router;
