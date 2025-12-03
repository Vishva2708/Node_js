const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    year: {
        type: Number,
    },
    description: {
        type: String
    },
   
});

const Moviemodal=mongoose.model("movie",movieSchema)
module.exports=Moviemodal