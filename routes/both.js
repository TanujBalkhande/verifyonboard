const express = require('express');
const Both = require('../models/Both');
const router = express.Router();
const veri = require('../models/Both');


//GETS ALL THE UID
router.get('/', async (req,res) => {
    try{
        const post = await veri.find();
        res.json(post);
    }catch (err) {
        res.json({message: err});
    }
});

//Post a UID
router.post('/', (req,res) => {
    const veri = new Both({
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        DOB: req.body.DOB,
        aadhar: req.body.aadhar,
        pan: req.body.pan,
        FullName: req.body.FullName
    });

    post.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });
    });
});



module.exports = router;