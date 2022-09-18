const router = require('express').Router();

router.get("/createContact", async(req, res) =>{
    res.send({
        success: true,
        message: "Welcome to the API from Contact Route"
    })
})



module.exports = router;