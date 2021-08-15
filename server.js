
const express = require("express");
const mysql = require("mysql");
const pagesRouter = require("./routes/pages");
const PORT = 5040;


const path = require("path");

const app = express();



//routers
app.use("/", pagesRouter);


app.use(express.urlencoded({ extended: true }));

//middleware
app.use(express.json());


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname + "/public")));



app.use((req, res, next) => {
    var err = new Error('Page not found.');
    err.status = 404;
    next(err);
});

app.use((err, req,res,next) => {
    res.status(err.status || 500);
    res.send(err.message);
});


app.listen(PORT, () => {
    console.log("Server running on port "+ PORT);
});