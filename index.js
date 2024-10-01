const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use(cors());

const cardRoutes = require('./routes/cards')
//Import the card routes
app.use(`/`, cardRoutes)

//Star the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
})



