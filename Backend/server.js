const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000 ;
const URL = process.env.MONGODB_URL ;

// mongoose.connect(URL ,{

//     useCreateIndex : true,
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     useFindAndModify : false
// });

mongoose.connect(URL ,{

    //useNewUrlParser: true,
    useCreateIndex: true
   // useFindAndModify: false,
    //useUnifiedTopology: true
    
},mongoose.connect(URL,
    err => {
        if(err) throw err;
        console.log(err)
    })
 );


const connection = mongoose.connection;
connection.once("open",() => {
console.log("Mongodb Connection Sucess !");
});

const QuestionRouter = require("./routes/Question.js");
const AnswerRouter = require("./routes/Answer.js");

app.use("/Question",QuestionRouter);
app.use("/Answer",AnswerRouter);

app.listen(PORT,()=> {
    console.log(`server is up and running on port ${PORT}`);
});


