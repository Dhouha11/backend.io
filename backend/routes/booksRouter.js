const express = require('express')
const router = express.Router() 


router.get('/', (req,res)=> {
    res.json({message: "All books"});
});

router.get('/:bookId', (req,res)=> {
    res.json({message: "Single Book"});
});


router.post('/:bookId', (req,res)=> {
    res.json({message: "book created "});
});

router.put('/:bookId', (req,res)=> {
    res.json({message: "Book updated"});
});


module.exports = router