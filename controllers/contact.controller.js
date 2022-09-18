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

const getContacts = async (req, res) => {
    try {
        const sql = "SELECT * FROM contacts";
        db.query(sql, (err, result) => {
            if(err) return console.log(err);
            res.send({
                success: true,
                message: "Contacts Fetched Successfully",
                data: result
            })
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}



//@route   GET api/contacts/:id
//@desc    Get contact by ID
//@access  Private
const getContact = async (req, res) => {
    try {
        const sql = "SELECT * FROM contacts WHERE id = ?";
        db.query(sql, [req.params.id], (err, result) => {
            if(err) return console.log(err);
            if(result.length === 0){
                return res.status(404).send({
                    success: false,
                    message: "Contact Not Found"
                })
            }
            
            res.send({
                success: true,
                message: "Contact Fetched Successfully",
                data: result
            })
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}



// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private




module.exports = {createContact, getContacts, getContact}