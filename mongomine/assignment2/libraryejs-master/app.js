const express = require("express");
const chalk = require("chalk");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
var  mongoose=require('mongoose');
var app = new express();


app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}))

var nav = [
    { link: '/', title: "Home" },
    { link: '/login', title: "Login" },
    { link: '/signup', title: "Sign up" },
    { link: '/books', title: "Books" },
    { link: '/authors', title: "Authors" },
    { link: '/books/addbook', title: "Add Book" }
];

mongoose.connect("mongodb+srv://unniDb:unni123@cluster0-3h7qw.mongodb.net/test?retryWrites=true&w=majority");
var db=mongoose.connection;
db.on('error',(er)=>{
  console.log(er)
})

db.once('open',()=>{
  console.log("Success");
})

const booksRouter = require('./src/routes/bookRouter')(nav);//passing nav to booksRouter
const authorRouter = require('./src/routes/authorRouter')(nav) //passing nav to aouther
const loginRouter=require('./src/routes/loginRouter')(nav)
const signupRouter=require('./src/routes/signupRouter')(nav)

app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

//mongoose.connect("mongodb://localhost:27017/Library");


app.set('views','./src/views');
app.set('view engine','ejs');



app.get("/", function (req, res) {
    res.render("index.ejs",
        {
            nav,
            title: "Library",

        });

});

app.listen(4000, function () {
    console.log("listerning to port" + chalk.green('4000'))
});