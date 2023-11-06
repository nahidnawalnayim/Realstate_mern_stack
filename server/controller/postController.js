const Post = require('../model/postModel');

const postController = async (req, res, next) => {
    const { title, brief, comment } = req.body;
    try {
        if (!title || !brief) {
            throw Error("Please fillup these .")
        }
        const post = new Post({ title, brief,comment });
        await post.save();
        return res.status(200).json(post);
    } catch (e) {
        next(e);
    }
}
module.exports= postController;