const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        body:{
            type: String,
            required: true,
        },
    } ,
    { timestamps : true }
)

module.exports = mongoose.model("Post", postSchema)