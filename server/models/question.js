/*Diego Poblete #301158204, COMP 229, Section 008*/

let mongoose = require('mongoose');

let questionModel = mongoose.schema(
    {
        surveyId: Number,
        question: String
    },
    {
        collection: "question"
    }
);

module.exports = mongoose.model('Question', questionModel);