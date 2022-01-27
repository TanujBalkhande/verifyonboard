const express = require('express');
const Both = require('../models/Both');
const router = express.Router();
//const veri = require('../models/Both');

//SPECIFIC UID
router.get('/:pan', async (req, res) => {
    try{
    const post = await Both.findOne({pan: req.params.pan});
    
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