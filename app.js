const express = require('express');
const cors = require('cors');
const db = require('./utils/dbConnection');
const app = express();

const port = process.env.PORT || 5000;

/* Init MiddleWares  */
app.use(express.json());
app.use(cors())


 /* Listen PORT */
 app.listen(port, () => console.log(`Server started on port ${port}`));

/* Init Routes */
app.get("/", (req, res) =>{
    res.send({
        success: true,
        message: "Welcome to the API"
    })
})

module.exports = app;