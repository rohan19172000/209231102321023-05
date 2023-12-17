const express = require("express");

// importing routes
const userRouter = require("./routes/users");
// const booksRouter = require("./routes/books");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Server is up and running.."
    })
})


app.use("/users",userRouter);
// app.use("/books", booksRouter);


app.all("*", (req,res)=>{
    res.status(500).json({
        message: "This route does not exist"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})