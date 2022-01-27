const express = require('express');
const Both = require('../models/Both');
const router = express.Router();


//SPECIFIC UID
router.get('/:uid', async (req, res) => {
    try{
    const post = await Both.findOne({uid: req.params.aadhar});
    
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