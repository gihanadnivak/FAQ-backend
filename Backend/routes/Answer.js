const router = require("express").Router();
let Answer = require("../models/Answer");

router.route("/addAnswer").post((req,res)=>{

    const QID = req.body.QuestionID;
    const AdminID = req.body.AdminID;
    const Answer = req.body.Answer;
    const Date = req.body.Date;

    const newQuestion = new Question({

        QID,
        AdminID,
        Answer,
        Date
    })

    newQuestion.save().then(()=>{
        res.json("Question Added")
    }).catch((err)=>{
        console.log(err);
    })

 })

 router.route("/").get((req,res) => {

    Answer.find().then((answers)=>{
        res.json(answers)
    }).catch((err)=>{
        console.log(err)
    })
 })

 router.route("/update/:answerid").put(async (req,res)=>{
    let questionId = req.params.answerid;
    const { answer } = req.body;

    const updateAnswer = { answer }

    const update = await Answer.findByIdAndUpdate( questionId,updateAnswer)
    .then(()=>{
        res.status(200).send({status : "Answer Updated" }) // one nam methana update una user wa front end ekata yawanna puluwan ekata methanata ` ,user : update }) ` gahanna
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "error with update", error : err.message}) ;
    })

 })

 router.route("/delete/:answerid").delete(async (req,res) => {
     let answerID = req.params.answerid;

     await Answer.findByIdAndDelete(answerid)
     .then(() => {
         res.status(200).send({status : "user deleted"});

     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "error with deleting use",error : err.message});


     })
 })


 //eka answer ekak witarak ganna 
router.route("get/:answerid").get(async(req,res) =>{

    let answerID = req.params.answerid;
    const answer = await Answer.findById(answerID)
    .then(() =>{

        res.status(200).send({status : "answe fetched", answer:answer})

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status : "error with get answer", error: err.message})
    })
})


 module.exports = router ;