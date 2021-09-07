const mongoose = require('mongoose');

//const SchemaQ = mongoose.Schema;

const QuestionSchema = new mongoose.Schema ({
//const QuestionSchema = new SchemaQ ({

    topic : {
        type : String , 
        required : true
    },
    message : {
        type : String , 
        required : true
    }, 
    category : {
        type : String , 
        required : true
    },
    date: {
        type: Date,
        default: Date.now,
      }

})
                                //document name , schema eka 
//const Question = QuestionSchema("Question",QuestionSchema);

module.exports = Question = mongoose.model("Question",QuestionSchema) ;