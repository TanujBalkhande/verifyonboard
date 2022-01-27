const express = require('express');
const Aadhar = require('../models/Aadhar');
const router = express.Router();
const Post = require('../models/Aadhar');


//GETS ALL THE UID
router.get('/', async (req,res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch (err) {
        res.json({message: err});
    }
});

//Post a UID
router.post('/', (req,res) => {
    const post = new Aadhar({
        uid: req.body.uid,
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        phone: req.body.phone,
        address: req.body.address,
    });

    post.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
});

//SPECIFIC UID
router.get('/:uid', async (req, res) => {
    try{
    const post = await Aadhar.findOne({uid: req.params.uid});
    
    if (post != null) {
        console.log("documents found!");
        res.json("documents found!");
      }
      else{
        console.log("documents not found!");
        res.json("documents not found!");
      }
      //res.json(post);
      
    } catch (err) {
        res.json({message: err});
    }

});


module.exports = router;