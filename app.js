const express = require('express');
const cors = require('cors');
const app = express();



/* Init MiddleWares  */
app.use(express.json({ extended: false }));
app.use(cors())




/* Init Routes */
app.get("/", (req, res) =>{
    res.send({
        success: true,
        message: "Welcome to the API"
    })
})

module.exports = app;