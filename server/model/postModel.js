const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    brief:{
        type: String,
        required: true
    },
    comment:{
        type: mongoose.Schema.ObjectId,
        ref: "Comment"
    }
})

const Model=mongoose.model("post", postSchema);
module.exports=Model;