const mongoose = require("mongoose");
const categories = mongoose.Schema({
    title: {
        type: String
    }
});

const categorydata = mongoose.model("category", categories);
module.exports = categorydata