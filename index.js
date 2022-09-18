const app = require('./app');
const port = process.env.PORT || 5000;




/* Import Routes */
const contactRouter = require('./routes/contact.route');


/* Init Routes */
app.use("/api/contact", contactRouter);




/* Listen PORT */
app.listen(port, () => console.log(`Server started on port ${port}`));

/* Validations Routes */
app.use("*", (req, res) =>{
    res.send({message: "No Routes Found."})
})