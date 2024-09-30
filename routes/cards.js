const express = require('express');
const router = express.Router();
const cards = require(`../data/cards`);

// GET all cards
router.get(`/`, (req, res) => {
    res.json(cards);
})

//GET a specific card that match a specific name
router.get(`/:name`, (req, res) => {
    const cardName = req.params.name.toLowerCase();
    const matchingCards= cards.filter(c => c.name.toLowerCase() === cardName);
    if (matchingCards.length > 0)
    {
        res.json(matchingCards);
    } else {
         res.status(404).json({message: `Card not found`});
    }
})

module.exports = router;