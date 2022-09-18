const db = require("../utils/dbConnection");

const createContact = async (req, res) => {
    try {
     const sql = "INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)";
     db.query(sql, [req.body.first_name, req.body.last_name, req.body.email, req.body.mobile_number], (err, result) => {
        if(err) return console.log(err);
        res.send({
            success: true,
            message: "Contact Created Successfully",
            data: result
        })
    })

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private





// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private




module.exports = {createContact}