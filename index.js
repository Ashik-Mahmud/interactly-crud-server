const app = require('./app');



/* Import Routes */
const contactRouter = require('./routes/contact.route');


/* Init Routes */
app.use("/api/contact", contactRouter);






/* Validations Routes */
app.use("*", (req, res) =>{
    res.send({message: "No Routes Found."})
})

/* Global Error Handling */
process.on('unhandledRejection', (err) => {
    if(err){
        app.close(() => process.exit(1));
        console.log(`Logged Error: ${err}`);
    }
})  
