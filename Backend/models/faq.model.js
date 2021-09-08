const mongoose = require('mongoose');

const FAQSchema = mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    },
    topic: {
        type: String
    },
    category: {
        type: String
    },
    state: {
        type: String
    },
    date: {
        type: String
    }
}, 
{collection: 'faq'}
);

module.exports = mongoose.model("FAQ", FAQSchema);