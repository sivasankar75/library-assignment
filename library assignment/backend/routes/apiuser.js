const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const userinfo = require('../models/user');

router.post('/signup', async (req,res)=>{
    try{
        userinfo.findOne({ email: req.body.email }).then(
            (user) => {
                if (!user) {                    
                        bcrypt.hash(req.body.password, 10, function(err, password) {
                        let usernew ={
                            name: req.body.name,
                            email: req.body.email,
                            password: password,
                            
                        }
    
                        let newUser = new userinfo(usernew);
                        let saveUser = newUser.save();
                        console.log(saveUser);
                        return res.status(201).json({
                        
                        });                    
                    });

                    
                }
                          
            }
        )      
    }
    catch(error){
        res.status(500).json({
          });
    }
})


router.post('/login', async (req,res)=>{
    try {
          userInfo.findOne({ email: req.body.email }).then(
            (user) => {
                if (!user) {
                    return res.status(401).json({
                    });
                }
            
                bcrypt.compare(req.body.password, user.password).then(
                    (valid) => {
                        if (!valid) {
                            return res.status(401).json({
                            });
                        }
                        return res.status(200).json({
                            userId: user._id,
                            token: 'token'
                        });                        
                    }
                );
            }
        )
    }
    catch (error) {
        res.status(500).json({
            error: error
        });
    }
})


module.exports = router;