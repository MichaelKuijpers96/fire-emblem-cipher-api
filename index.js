const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

const cardRoutes = require('./routes/cards')
//Import the card routes
app.use(`/cards`, cardRoutes)

//Star the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
})



