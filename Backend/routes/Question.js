const router = require("express").Router();
let Question = require("../models/Question");

 router.route("/addQuestion").post((req,res)=>{

    //const QID = req.body.__id;
    const topic = req.body.topic;
    const message = req.body.message;
    const category = req.body.category;
    const date = req.body.date;

    const newQuestion = new Question({

       // QID,
        topic,
        message,
        category,
        date
    })

    newQuestion.save().then(()=>{
        res.json("Question Added")
    }).catch((err)=>{
        console.log(err);
    })

 })

 router.route("/").get((req,res) => {

    Question.find().then((questions)=>{
        res.json(questions)
    }).catch((err)=>{
        console.log(err)
    })
 })

 //  router.route("/update/:id").put 


 module.exports = router ;