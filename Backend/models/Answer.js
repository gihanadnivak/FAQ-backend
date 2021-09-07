const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

//const AnswerSchema = new Schema ({
    const AnswerSchema = new mongoose.Schema ({

    QuestionID : {
        type : String , 
        required : true
    },
    AdminID : {
        type : String , 
        required : true
    }, 
    Answer : {
        type : String , 
        required : true
    },
    Date: {
        type: Date,
        default: Date.now,
      }

})
                                //document name , schema eka 
//const Answer = AnswerSchema("Answer",AnswerSchema);

module.exports = Answer = mongoose.model("Answer",AnswerSchema) ;