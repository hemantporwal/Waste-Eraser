const express = require('express');
const router = express.Router();
const Dustbin = require('../models/Dustbin');
const Tree = require('../models/Tree');

//ROUTE 1: Add dustbin
router.post('/addbin',async (req,res)=>{
    let success = false;
    
    try{
        let {address, category, addedBy, latitude,longitude} = req.body;
        

        const bin = await Dustbin.create({
            address,
            category,
            latitude,
            longitude,
            addedBy
        });

        success = true;
        return res.status(200).json({success,bin});

    }catch(err){
        return res.status(500).json({success,error:err.message,message:"Internal server error"});
    }

});

//ROUTE 2: POST: /getbin
router.post('/getbin',async (req,res)=>{
    let success = false;
    
    try{
        const binList = await Dustbin.find();

        success = true;
        return res.status(200).json({success,binList});

    }catch(err){
        return res.status(500).json({success,error:err.message,message:"Internal server error"});
    }

});

//ROUTE 3: Add tree
router.post('/addtree',async (req,res)=>{
    let success = false;
    
    try{
        let {address, plantedBy, latitude,longitude} = req.body;
        

        const tree = await Tree.create({
            address,
            latitude,
            longitude,
            plantedBy
        });

        success = true;
        return res.status(200).json({success,tree});

    }catch(err){
        return res.status(500).json({success,error:err.message,message:"Internal server error"});
    }

});

//ROUTE 4: POST: /gettree
router.post('/gettree',async (req,res)=>{
    let success = false;
    
    try{
        const treeList = await Tree.find();

        success = true;
        return res.status(200).json({success,treeList});

    }catch(err){
        return res.status(500).json({success,error:err.message,message:"Internal server error"});
    }

});

module.exports = router;