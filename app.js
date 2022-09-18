const express = require('express');
const cors = require('cors');
const app = express();



/* Init MiddleWares  */
app.use(express.json({ extended: false }));
app.use(cors())


/* Init Routes */




/* Init Routes */
app.get("/", (req, res) =>{
    res.send({
        success: true,
        message: "Welcome to the API"
    })
})

/* Validations Routes */
app.use("*", (req, res) =>{
    res.send({message: "No Routes Found."})
})


module.exports = app;